// src/components/WaterList.jsx
function WaterList({ logs, onRemove }) {
    return (
      <ul className="list-disc list-inside p-4 bg-white rounded shadow-md w-full max-w-md mx-auto">
        {logs.map((log, index) => (
          <li key={index} className="flex justify-around items-center py-2 border-b last:border-b-0">
            {log.amount} ml <span>at  {log.time}</span> 
            <button onClick={() => onRemove(index)} className=" bg-black text-white py-2 px-3" >Remove</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default WaterList;
  