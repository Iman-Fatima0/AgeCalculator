import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './InputStyle.css';

function SummaryAge() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ageDetails } = location.state || {};

  if (!ageDetails) {
    return <h2>No age details available. Please calculate your age first.</h2>;
  }

  const calculateNextBirthday = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = Math.abs(nextBirthday - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30); 
    const remainingDays = diffDays % 30; 

    const day = nextBirthday.getDate();
    const month = nextBirthday.toLocaleString('default', { month: 'long' });

    return { day, month, diffMonths, remainingDays };
  };

  const { day, month, diffMonths, remainingDays } = calculateNextBirthday(ageDetails.dateOfBirth);

  return (
    <div className="age-summary">
      <div className="flex justify-center items-center gap-10 mb-8">
        <div className="bg-white text-gray-700 p-4 rounded-lg shadow-md w-1/2">
          <h2 className="text-xl font-bold text-center mb-2">Age</h2>
          <div className="flex flex-col items-center text-orange-500">
            <h3 className="text-5xl font-bold">{ageDetails.years}</h3>
            <p className="text-gray-600">years</p>
          </div>
          <div className="text-gray-600 text-center mt-4">
            <p className='text-orange-600'>{ageDetails.months % 12} months | {ageDetails.days % 30} days</p>
          </div>
        </div>
        <div className="bg-white text-gray-700 p-4 rounded-lg shadow-md w-1/2">
          <h2 className="text-xl font-bold text-center mb-2">Next Birthday</h2>
          <div className="flex flex-col items-center text-orange-500">
            <div className="text-5xl font-bold">🎂</div>
            <p className="text-gray-600">{day} {month}</p> 
          </div>
          <div className="text-gray-600 text-center mt-4">
            <p>{diffMonths} months | {remainingDays} days</p>
          </div>
        </div>
      </div>

      <h2 className='text-3xl font-bold text-center mb-6 text-yellow-500'>Summary</h2>
      <div className="summary-box">
        <div className="summary-item bg-slate-700 text-white  hover:bg-black">
          <h3>Years</h3>
          <p>{ageDetails.years}</p>
        </div>
        <div className="summary-item  bg-slate-700 text-white hover:bg-black">
          <h3>Months</h3>
          <p>{ageDetails.months}</p>
        </div>
        <div className="summary-item  bg-slate-700 text-white  hover:bg-black">
          <h3>Weeks</h3>
          <p>{ageDetails.weeks}</p>
        </div>
        <div className="summary-item  bg-slate-700 text-white  hover:bg-black">
          <h3>Days</h3>
          <p>{ageDetails.days}</p>
        </div>
        <div className="summary-item  bg-slate-700 text-white  hover:bg-black">
          <h3>Hours</h3>
          <p>{ageDetails.hours}</p>
        </div>
        <div className="summary-item  bg-slate-700 text-white  hover:bg-black">
          <h3>Minutes</h3>
          <p>{ageDetails.minutes}</p>
        </div>
      </div>
      <button onClick={() => navigate('/')} className=' bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 mt-6'>Back to Calculator</button>
    </div>
  );
}

export default SummaryAge;
