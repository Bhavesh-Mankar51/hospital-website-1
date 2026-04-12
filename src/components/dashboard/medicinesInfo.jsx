import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const MedicinesInfo = () => {
  const [medicines, setMedicines] = useState([]);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('doctorToken');

  useEffect(() => {
    if (!token) { navigate('/login'); return; }
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/medicines', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) setMedicines(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this medicine?')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`http://localhost:3000/api/medicines/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setMedicines(prev => prev.filter(m => m._id !== id));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDeletingId(null);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const trimmed = newName.trim().toUpperCase();
    if (!trimmed) return;
    setAdding(true);
    setError('');
    try {
      const res = await fetch('http://localhost:3000/api/medicines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name: trimmed })
      });
      const data = await res.json();
      if (data.success) {
        setMedicines(prev => [...prev, data.data].sort((a, b) => a.name.localeCompare(b.name)));
        setNewName('');
      } else {
        setError(data.message || 'Failed to add medicine');
      }
    } catch (err) {
      setError('Server error');
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4 pb-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Medicines Info</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Add Medicine Form */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Add New Medicine</h2>
          <form onSubmit={handleAdd} className="flex gap-3">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="e.g. TAB. PARACETAMOL 500MG"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              disabled={adding}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition cursor-pointer disabled:opacity-60"
            >
              {adding ? 'Adding...' : '+ Add'}
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Medicines List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <span className="text-sm text-gray-500">{medicines.length} medicine{medicines.length !== 1 ? 's' : ''} in database</span>
          </div>
          {loading ? (
            <p className="text-center text-gray-500 py-8">Loading...</p>
          ) : medicines.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No medicines added yet.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {medicines.map((med, idx) => (
                <li key={med._id} className="flex items-center justify-between px-6 py-3 text-sm text-gray-800 hover:bg-gray-50">
                  <div className="flex items-center">
                    <span className="text-gray-400 w-8">{idx + 1}.</span>
                    <span>{med.name}</span>
                  </div>
                  <button
                    onClick={() => handleDelete(med._id)}
                    disabled={deletingId === med._id}
                    className="text-red-400 hover:text-red-600 transition disabled:opacity-40 cursor-pointer"
                    title="Delete medicine"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicinesInfo;
