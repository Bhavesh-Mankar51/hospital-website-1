import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import {
  Plus, Printer, Trash2, FileText
} from 'lucide-react';
import './prescription.css';

function Prescription() {
  const [meta, setMeta] = useState({
    date: new Date().toISOString().split('T')[0],
    referredBy: 'Walk-in',
    nextVisit: '15-05-2026'
  });

  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [medicineNames, setMedicineNames] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('doctorToken');
    if (!token) {
      navigate('/login');
      return;
    }
    fetch('http://localhost:3000/api/medicines', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data.length > 0) {
          setMedicineNames(data.data.map(m => m.name));
        }
      })
      .catch(() => {});
  }, [navigate]);

  const [patient, setPatient] = useState({
    name: 'John Doe',
    age: '32',
    ageUnit: 'Y',
    gender: 'M',
    address: 'Mumbai, India',
    weight: '75',
    height: '180',
    bp: '120/80',
  });

  const [clinical, setClinical] = useState({
    diagnosis: 'Mild Acne Vulgaris',
    advice: 'Use sunscreen every day.\nDrink plenty of water.\nAvoid touching your face.'
  });

  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: 'TAB. DEMO MEDICINE 1',
      dosage: '1 Morning, 1 Night\n(After Food)',
      duration: '10 Days\n(Total: 20 Tabs)'
    }
  ]);

  const handleMetaChange = (e) => setMeta({ ...meta, [e.target.name]: e.target.value });
  const handlePatientChange = (e) => setPatient({ ...patient, [e.target.name]: e.target.value });
  const handleClinicalChange = (e) => setClinical({ ...clinical, [e.target.name]: e.target.value });

  const addMedicine = () => {
    setMedicines([...medicines, {
      id: Date.now(), name: '', dosage: '', duration: ''
    }]);
  };

  const removeMedicine = (id) => {
    setMedicines(medicines.filter(m => m.id !== id));
  };

  const updateMedicine = (id, field, value) => {
    setMedicines(medicines.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const printRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Prescription_${patient.name.replace(/ /g, '_')}`,
  });

  const handleSaveAndPrint = async () => {
    setIsSaving(true);
    const { name, ...patientRest } = patient;
    const payload = {
      ...meta,
      ...clinical,
      ...patientRest,
      patientName: name,
      medicines
    };

    try {
      const token = localStorage.getItem('doctorToken');
      const res = await fetch('http://localhost:3000/api/prescriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        console.log('Save successful, triggering print...');
        setTimeout(() => {
          handlePrint();
        }, 100);
      } else {
        alert('Failed to save prescription: ' + (data.message || 'Unknown error'));
        if (data.message === 'Not authorized, token failed' || data.message === 'Not authorized, no token') {
            navigate('/login');
        }
      }
    } catch (err) {
      alert('Error saving prescription: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3 && parts[0].length === 4) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateStr;
  }



  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button className="btn" style={{ background: '#475569', color: 'white' }} onClick={() => navigate('/dashboard')}>
              ← Dashboard
            </button>
            <h2>Rx Builder</h2>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn" style={{ background: '#64748b', color: 'white' }} onClick={() => handlePrint()}>
              <Printer size={16} /> Print Only
            </button>
            <button className="btn btn-print" onClick={handleSaveAndPrint} disabled={isSaving}>
              <Printer size={16} /> {isSaving ? 'Saving...' : 'Save & Print'}
            </button>
          </div>
        </div>

        <div className="sidebar-content">
          <div className="form-section">
            <div className="form-section-title">PATIENT INFO</div>
            <div className="form-row">
              <div className="form-group" style={{ flex: 1 }}>
                <label>Date</label>
                <input type="date" name="date" value={meta.date} onChange={handleMetaChange} />
              </div>
              <div className="form-group" style={{ flex: 2 }}>
                <label>Full Name</label>
                <input type="text" name="name" value={patient.name} onChange={handlePatientChange} placeholder="Full Name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group" style={{ flex: 1 }}>
                <label>Gender</label>
                <select name="gender" value={patient.gender} onChange={handlePatientChange}>
                  <option value="Gender">Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </select>
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Age</label>
                <input type="number" name="age" value={patient.age} onChange={handlePatientChange} placeholder="Age" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Unit</label>
                <select name="ageUnit" value={patient.ageUnit} onChange={handlePatientChange}>
                  <option value="Unit">Unit</option>
                  <option value="Y">Y</option>
                  <option value="M">M</option>
                  <option value="D">D</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group" style={{ flex: 2 }}>
                <label>Address</label>
                <input type="text" name="address" value={patient.address} onChange={handlePatientChange} placeholder="Address" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Weight</label>
                <input type="text" name="weight" value={patient.weight} onChange={handlePatientChange} placeholder="Weight" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>Height</label>
                <input type="text" name="height" value={patient.height} onChange={handlePatientChange} placeholder="Height" />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label>BP</label>
                <input type="text" name="bp" value={patient.bp} onChange={handlePatientChange} placeholder="BP" />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">CLINICAL NOTES</div>
            <div className="form-group">
              <label>Diagnosis</label>
              <textarea name="diagnosis" value={clinical.diagnosis} onChange={handleClinicalChange} placeholder="Diagnosis" rows="3"></textarea>
            </div>
          </div>

          <div className="form-section">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div className="form-section-title" style={{ marginBottom: 0 }}>MEDICATIONS (RX)</div>
              <button className="btn btn-print" onClick={addMedicine} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                <Plus size={16} /> Add Medicine
              </button>
            </div>

            {medicines.map((med, index) => (
              <div key={med.id} className="medicine-card">
                <div className="medicine-header">
                  <div className="medicine-title">
                    <span>{index + 1})</span>
                    <input type="text" list="med-list" value={med.name} onChange={(e) => updateMedicine(med.id, 'name', e.target.value)} placeholder="ENTER MEDICINE NAME" className="med-name-input" />
                  </div>
                  <div className="medicine-actions">
                    <button className="icon-btn edit-btn" title="Edit"><FileText size={16} /></button>
                    <button className="icon-btn remove-btn" onClick={() => removeMedicine(med.id)} title="Remove medicine"><Trash2 size={16} /></button>
                  </div>
                </div>
                
                <div className="form-row" style={{ marginBottom: 0 }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Dosage & Instructions</label>
                    <input type="text" value={med.dosage} onChange={(e) => updateMedicine(med.id, 'dosage', e.target.value)} placeholder="Dosage & Instructions" />
                  </div>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Duration & Total Quantity</label>
                    <input type="text" value={med.duration} onChange={(e) => updateMedicine(med.id, 'duration', e.target.value)} placeholder="Duration / Quantity" />
                  </div>
                </div>
              </div>
            ))}
            
            <datalist id="med-list">
              {medicineNames.map((m, idx) => (
                <option key={idx} value={m} />
              ))}
            </datalist>
          </div>

          <div className="form-section">
            <div className="form-section-title">FOLLOW-UP & ADVICE</div>
            <div className="form-group">
              <label>Advice Given</label>
              <textarea name="advice" value={clinical.advice} onChange={handleClinicalChange} placeholder="List advice here" rows="4"></textarea>
            </div>
            <div className="form-group" style={{ width: '50%', marginTop: '1rem' }}>
              <label>Next Visit Date</label>
              <input type="date" name="nextVisit" value={meta.nextVisit} onChange={handleMetaChange} />
            </div>
          </div>
        </div>
      </div>

      <div className="preview-area">
        <div className="zoom-wrapper">
          <div className="paper-sheet" ref={printRef}>
            <div className="print-header-modern">
              <div className="print-header-left">
                <div className="clinic-brand">
                  <div className="clinic-name-text">SkinCare Clinic</div>
                </div>
                <div className="clinic-address">
                  2181 Nowle Road, Suite 3080,<br/>
                  SkinCare, TX 38525
                </div>
              </div>
              <div className="print-header-right">
                <div className="doc-details-title">Dr Allen Smith</div>
                <div className="doc-details-text">
                  MBBS MD DNB<br/>
                  Contact: 9876543210<br/>
                  <span className="doc-website">www.skincareclinic.com</span>
                </div>
              </div>
            </div>

            <div className="separator-line-modern"></div>

            <div className="patient-info-container">
              <div className="patient-info-row">
                <div className="info-item">
                  <span className="info-label">Patient Name:</span>
                  <span className="info-val">{patient.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Visit Date:</span>
                  <span className="info-val">{formatDate(meta.date)}</span>
                </div>
              </div>
              <div className="patient-info-row">
                <div className="info-item">
                  <span className="info-label">Age / Gender:</span>
                  <span className="info-val">
                    {patient.age} {patient.ageUnit === 'Y' ? 'years' : patient.ageUnit === 'M' ? 'months' : 'days'} / {patient.gender === 'M' ? 'Male' : patient.gender === 'F' ? 'Female' : patient.gender}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Weight:</span>
                  <span className="info-val">{patient.weight} kg</span>
                </div>
                <div className="info-item">
                  <span className="info-label">BP:</span>
                  <span className="info-val">{patient.bp}</span>
                </div>
              </div>
            </div>

            {clinical.diagnosis && (
              <div className="modern-section" style={{ marginTop: '1.5rem' }}>
                <div className="modern-label">Diagnosis:</div>
                <div className="modern-text">{clinical.diagnosis}</div>
              </div>
            )}

            <div className="rx-symbol-modern">℞</div>

            <div className="meds-table-container">
              <table className="meds-table-modern">
                <thead>
                  <tr>
                    <th style={{ width: '40%' }}>Medication</th>
                    <th style={{ width: '30%' }}>Dosage & Instructions</th>
                    <th style={{ width: '30%' }}>Duration & Total Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {medicines.map((med, idx) => (
                    <tr key={med.id}>
                      <td>{idx + 1}) {med.name}</td>
                      <td>{med.dosage}</td>
                      <td>{med.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {clinical.advice && (
              <div className="modern-section advice-section">
                <div className="modern-label">Advice:</div>
                <div className="modern-list">
                  {clinical.advice.split('\n').map((line, i) => (
                    line.trim() && <div key={i} className="advice-item">{line}</div>
                  ))}
                </div>
              </div>
            )}

            {meta.nextVisit && (
              <div className="next-visit-modern">
                <span className="modern-label">Next Visit Info: </span>
                <span className="modern-text">{formatDate(meta.nextVisit)}</span>
              </div>
            )}

            <div className="signature-block-modern">
              <div className="signature-label">Signature,</div>
              <div className="signature-img-placeholder">Signature</div>
              <div className="signature-name-modern">Signature P.M.</div>
              <div className="signature-clinic">SkinCare Clinic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prescription;
