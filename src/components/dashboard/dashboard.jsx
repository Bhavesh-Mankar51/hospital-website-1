import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('doctorToken');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchRecords = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/prescriptions`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.success) {
          setPrescriptions(data.data);
        } else {
          localStorage.removeItem('doctorToken');
          navigate('/login');
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecords();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Doctor Dashboard</h1>
          <div className="space-x-4">
            <button onClick={() => navigate('/medicines')} className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
              Medicines Info
            </button>
            <button onClick={() => navigate('/prescription')} className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition cursor-pointer">
              + New Prescription
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diagnosis</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {prescriptions.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No records found.</td>
                </tr>
              ) : (
                prescriptions.map((record) => (
                  <tr 
                    key={record._id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/dashboard/prescription/${record._id}`)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.date || new Date(record.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.patientName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.patientId}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{record.diagnosis || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
