import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import SummaryAge from './Pages/SummaryAge';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Summary" element={<SummaryAge />} />
      </Routes>
    </>
  );
}

export default App;
