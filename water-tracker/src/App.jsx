// src/App.jsx
import { useState, useRef, useEffect } from 'react';
import WaterForm from './components/WaterForm';
import WaterList from './components/WaterList';
import { calculateTotal, highlightTotal } from './helpers/utils';

function App() {
  const [logs, setLogs] = useState([]);
  const totalRef = useRef(null);

  const addLog = (log) => setLogs([...logs, log]);

  const removeLog = (index) => {
    setLogs(logs.filter((_, i) => i !== index));
  };

  const resetLogs = () => setLogs([]);

  const total = calculateTotal(logs);

  useEffect(() => {
    if (total > 3000) {
      highlightTotal(totalRef);
    } else {
      if (totalRef.current) totalRef.current.style.border = 'none';
    }
  }, [total]);

  return (
    <div className='container mx-auto p-4 bg-gray-100 rounded shadow-md text-center text-gray-800 flex flex-col items-center gap-4'>
      <h1 className=' text-3xl '>Water Intake Tracker</h1>
      <WaterForm onAdd={addLog} />
      <div ref={totalRef} >Total Intake: {total} ml</div>
      <WaterList logs={logs} onRemove={removeLog} />
      <button onClick={resetLogs}className=" bg-black text-white py-2 px-3" >Reset All Logs</button>
    </div>
  );
}

export default App;

