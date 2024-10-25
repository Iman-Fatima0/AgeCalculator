// Calculator.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Calculator() {
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const calculateAge = (event) => {
    event.preventDefault();

    const birthDate = new Date(dob);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
      setError('Invalid date format');
      return;
    } else {
      setError('');
    }

    const diffInMilliseconds = today - birthDate;
    const ageDate = new Date(diffInMilliseconds);

    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    const months = today.getMonth() - birthDate.getMonth() + (12 * (today.getFullYear() - birthDate.getFullYear()));
    const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor(diffInMilliseconds / (1000 * 60));

    const ageSummary = {
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
    };

    navigate('/summary', { state: { ageDetails: ageSummary } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className=" shadow-lg p-8 rounded-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-yellow-500">Age Calculator</h1>
        <form onSubmit={calculateAge} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Enter your date of birth</label>
            <input 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button 
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Calculate Age
          </button>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
