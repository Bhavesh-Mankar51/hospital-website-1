import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {
  Plus, Printer, Trash2, FileText
} from 'lucide-react';
import { medicineNames } from './medicines';
import './prescription.css';

function Prescription() {
  const [meta, setMeta] = useState({
    patientId: 'PT-1024',
    date: new Date().toISOString().split('T')[0],
    referredBy: 'Walk-in',
    nextVisit: '15-05-2026'
  });

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
    contentRef: () => printRef.current,
    documentTitle: `Prescription_${patient.name.replace(/ /g, '_')}`,
  });

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
          <h2><FileText size={20} /> Rx Builder</h2>
          <button className="btn btn-print" onClick={handlePrint}>
            <Printer size={16} /> Print PDF
          </button>
        </div>

        <div className="sidebar-content">
          <div className="form-section">
            <div className="form-section-title">Patient Info</div>
            <div className="form-row">
              <div className="form-group">
                <label>Patient ID</label>
                <input type="text" name="patientId" value={meta.patientId} onChange={handleMetaChange} />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" name="date" value={meta.date} onChange={handleMetaChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" value={patient.name} onChange={handlePatientChange} placeholder="John Doe" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Gender</label>
                <select name="gender" value={patient.gender} onChange={handlePatientChange}>
                  <option value="M">Male (M)</option>
                  <option value="F">Female (F)</option>
                  <option value="O">Other (O)</option>
                </select>
              </div>
              <div className="form-group" style={{ flex: 0.6 }}>
                <label>Age</label>
                <input type="number" name="age" value={patient.age} onChange={handlePatientChange} />
              </div>
              <div className="form-group" style={{ flex: 0.4 }}>
                <label>Unit</label>
                <select name="ageUnit" value={patient.ageUnit} onChange={handlePatientChange}>
                  <option value="Y">Y</option>
                  <option value="M">M</option>
                  <option value="D">D</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" value={patient.address} onChange={handlePatientChange} placeholder="e.g. Mumbai, India" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Weight (kg)</label>
                <input type="text" name="weight" value={patient.weight} onChange={handlePatientChange} />
              </div>
              <div className="form-group">
                <label>Height (cms)</label>
                <input type="text" name="height" value={patient.height} onChange={handlePatientChange} />
              </div>
              <div className="form-group">
                <label>BP (mmHg)</label>
                <input type="text" name="bp" value={patient.bp} onChange={handlePatientChange} />
              </div>
            </div>

            <div className="form-group">
              <label>Referred By</label>
              <input type="text" name="referredBy" value={meta.referredBy} onChange={handleMetaChange} placeholder="Walk-in" />
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">Clinical Notes</div>
            <div className="form-group">
              <label>Diagnosis</label>
              <textarea name="diagnosis" value={clinical.diagnosis} onChange={handleClinicalChange} placeholder="e.g. Acne Vulgaris"></textarea>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">Medications (Rx)</div>

            {medicines.map((med, index) => (
              <div key={med.id} className="medicine-card">
                <button className="remove-btn" onClick={() => removeMedicine(med.id)} title="Remove medicine">
                  <Trash2 size={14} />
                </button>
                <div className="form-group">
                  <label>Medicine Name</label>
                  <input type="text" list="med-list" value={med.name} onChange={(e) => updateMedicine(med.id, 'name', e.target.value)} placeholder="e.g. TAB. DEMO MEDICINE 1" />
                </div>
                <div className="form-group">
                  <label>Dosage & Instructions</label>
                  <textarea value={med.dosage} onChange={(e) => updateMedicine(med.id, 'dosage', e.target.value)} placeholder="e.g. 1 Morning, 1 Night\n(After Food)" rows="2"></textarea>
                </div>
                <div className="form-group">
                  <label>Duration & Total Quantity</label>
                  <textarea value={med.duration} onChange={(e) => updateMedicine(med.id, 'duration', e.target.value)} placeholder="e.g. 10 Days\n(Total: 20 Tabs)" rows="2"></textarea>
                </div>
              </div>
            ))}

            <datalist id="med-list">
              {medicineNames.map((m, idx) => (
                <option key={idx} value={m} />
              ))}
            </datalist>

            <button className="btn btn-secondary btn-full" onClick={addMedicine}>
              <Plus size={16} /> Add Medicine
            </button>
          </div>

          <div className="form-section">
            <div className="form-section-title">Follow-up & Advice</div>
            <div className="form-group">
              <label>Advice Given</label>
              <textarea name="advice" value={clinical.advice} onChange={handleClinicalChange} placeholder="e.g. Drink plenty of water"></textarea>
            </div>
            <div className="form-group">
              <label>Next Visit Date</label>
              <input type="text" name="nextVisit" value={meta.nextVisit} onChange={handleMetaChange} placeholder="e.g. 15-05-2026" />
            </div>
          </div>
        </div>
      </div>

      <div className="preview-area">
        <div className="paper-sheet" ref={printRef}>
          <div className="watermark">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#d1fae5" />
              <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="#10b981" />
            </svg>
            <div className="watermark-text">SkinCare</div>
            <div className="watermark-subtext">Advanced Dermatology Center</div>
          </div>

          <div className="print-header">
            <div className="header-col header-col-left">
              <div style={{
                width: '120px',
                height: '80px',
                border: '2px dashed #9ca3af',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                backgroundColor: '#f9fafb',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                HOSPITAL LOGO
              </div>
            </div>

            <div className="header-col header-col-center">
              <div className="doc-name">Name of Doctor</div>
              <div className="doc-credentials">
                M.B.B.S., M.D. (Dermatology)<br /> Reg. No: 123456
              </div>
            </div>

            <div className="header-col header-col-right">
              <div className="clinic-name">SkinCare Clinic</div>
              <div className="clinic-info">
                123 Health Ave, Medical City<br />
                Ph: +1 234 567 8900<br />
                Timing: 09:00 AM - 05:00 PM<br />
                Closed: Sunday
              </div>
            </div>
          </div>

          <div className="separator-line"></div>

          <div className="top-meta">
            <div className="barcode-placeholder">
              ||||||||||||||||
            </div>
            <div className="print-date">
              Date: {formatDate(meta.date)}
            </div>
          </div>

          <div className="patient-info-block">
            <div className="patient-id-line">
              ID: {meta.patientId} - {patient.name} ({patient.gender}) / {patient.age} {patient.ageUnit}
            </div>
            {patient.address && <div>Address: {patient.address}</div>}

            <div style={{ marginTop: '0.5rem' }}>
              {[
                patient.weight && `Weight(kg): ${patient.weight}`,
                patient.height && `Height (cms): ${patient.height}`,
                patient.bp && `BP: ${patient.bp} mmHg`
              ].filter(Boolean).join(', ')}
            </div>

            {meta.referredBy && (
              <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                Referred By: {meta.referredBy}
              </div>
            )}
          </div>

          {clinical.diagnosis && (
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="block-label" style={{ marginBottom: '0.2rem' }}>Diagnosis:</div>
              {clinical.diagnosis.split('\n').map((line, i) => (
                line.trim() && <div key={i} className="list-item">{line}</div>
              ))}
            </div>
          )}

          <div className="rx-symbol">℞</div>

          <table className="meds-table" style={{ position: 'relative', zIndex: 2 }}>
            <thead>
              <tr>
                <th style={{ width: '45%' }}>Medicine Name</th>
                <th style={{ width: '35%' }}>Dosage</th>
                <th style={{ width: '20%' }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((med, idx) => (
                <tr key={med.id}>
                  <td>
                    <span className="med-serial">{idx + 1})</span>
                    <span className="med-name">{med.name}</span>
                  </td>
                  <td className="med-dosage">{med.dosage}</td>
                  <td className="med-duration">{med.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {clinical.advice && (
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="block-label" style={{ marginBottom: '0.2rem' }}>Advice Given:</div>
              {clinical.advice.split('\n').map((line, i) => (
                line.trim() && <div key={i} className="list-item">{line}</div>
              ))}
            </div>
          )}

          {meta.nextVisit && (
            <div className="next-visit" style={{ position: 'relative', zIndex: 2 }}>
              Next Visit: {meta.nextVisit}
            </div>
          )}

          <div className="signature-block" style={{ zIndex: 2 }}>
            <img src="" alt="Signature" className="signature-img" style={{ filter: 'grayscale(100%) opacity(0.8)' }} />
            <div className="signature-name">
              Name of Doctor<br />
              M.B.B.S., M.D.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prescription;
