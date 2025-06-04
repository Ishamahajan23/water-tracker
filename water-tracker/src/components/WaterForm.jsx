// src/components/WaterForm.jsx
import { useRef, useEffect } from 'react';

function WaterForm({ onAdd }) {
  const amountRef = useRef();
  const timeRef = useRef();

  useEffect(() => {
    amountRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = amountRef.current.value;
    const time = timeRef.current.value;

    if (!amount || !time) return;

    onAdd({ amount, time });

    amountRef.current.value = '';
    timeRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input ref={amountRef} type="number" placeholder="Amount (ml)"  className='border px-3 py-2'/>
      <input ref={timeRef} type="time" className='border px-3 py-2' />
      <button type="submit" className=' bg-black text-white py-2 px-4'>Add Log</button>
    </form>
  );
}

export default WaterForm;
