import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { Printer, ArrowLeft } from 'lucide-react';
import '../prescription/prescription.css'; // Reusing the same CSS for identical print style

const PrescriptionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const printRef = useRef();

  useEffect(() => {
    const fetchPrescription = async () => {
      const token = localStorage.getItem('doctorToken');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const res = await fetch(`http://localhost:3000/api/prescriptions/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.success) {
          setRecord(data.data);
        } else {
          alert('Failed to load prescription');
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrescription();
  }, [id, navigate]);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Prescription_${record?.patientName?.replace(/ /g, '_') || 'Doc'}`,
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3 && parts[0].length === 4) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateStr;
  }

  if (loading) {
    return <div className="min-h-screen pt-24 text-center">Loading...</div>;
  }

  if (!record) {
    return <div className="min-h-screen pt-24 text-center">Prescription not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => navigate('/dashboard')} className="flex items-center text-gray-600 hover:text-gray-900 transition">
            <ArrowLeft size={18} className="mr-2" /> Back to Dashboard
          </button>
          <button onClick={handlePrint} className="flex items-center bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            <Printer size={18} className="mr-2" /> Print Prescription
          </button>
        </div>

        <div className="bg-gray-300 p-8 flex justify-center items-center rounded-xl overflow-x-auto shadow-inner">
          {/* This uses the globally defined paper-sheet from prescription.css */}
           <div className="paper-sheet" ref={printRef} style={{ margin: 0 }}>
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
                  <span className="info-val">{record.patientName || record.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Patient ID:</span>
                  <span className="info-val">{record.patientId}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Visit Date:</span>
                  <span className="info-val">{formatDate(record.date)}</span>
                </div>
              </div>
              <div className="patient-info-row">
                 <div className="info-item">
                    <span className="info-label">Age / Gender:</span>
                    <span className="info-val">
                       {record.age} {record.ageUnit === 'Y' ? 'years' : record.ageUnit === 'M' ? 'months' : 'days'} / {record.gender === 'M' ? 'Male' : record.gender === 'F' ? 'Female' : record.gender}
                    </span>
                 </div>
                 <div className="info-item">
                   <span className="info-label">Weight:</span>
                   <span className="info-val">{record.weight} kg</span>
                 </div>
                 <div className="info-item">
                   <span className="info-label">BP:</span>
                   <span className="info-val">{record.bp}</span>
                 </div>
              </div>
            </div>

            {record.diagnosis && (
              <div className="modern-section" style={{ marginTop: '1.5rem' }}>
                 <div className="modern-label">Diagnosis:</div>
                 <div className="modern-text">{record.diagnosis}</div>
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
                    {(record.medicines || []).map((med, idx) => (
                      <tr key={med.id || idx}>
                         <td>{idx + 1}) {med.name}</td>
                         <td>{med.dosage}</td>
                         <td>{med.duration}</td>
                      </tr>
                    ))}
                 </tbody>
               </table>
            </div>

            {record.advice && (
               <div className="modern-section advice-section">
                  <div className="modern-label">Advice:</div>
                  <div className="modern-list">
                    {record.advice.split('\n').map((line, i) => (
                      line.trim() && <div key={i} className="advice-item">{line}</div>
                    ))}
                  </div>
               </div>
            )}

             {record.nextVisit && (
               <div className="next-visit-modern">
                 <span className="modern-label">Next Visit Info: </span>
                 <span className="modern-text">{formatDate(record.nextVisit)}</span>
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
};

export default PrescriptionDetails;
