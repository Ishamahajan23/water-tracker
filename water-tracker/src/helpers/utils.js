
export const calculateTotal = (logs) => {
    return logs.reduce((sum, log) => sum + Number(log.amount), 0);
  };
  
  export const highlightTotal = (ref) => {
    if (ref.current) {
      ref.current.style.border = '2px solid red';
    }
  };
  