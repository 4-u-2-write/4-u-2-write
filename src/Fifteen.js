import { useState, useEffect } from 'react';


const Fifteen = () => {
  const [value, setValue] = useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => console.log("I can see you're not typing. Get back to work!"), 3000);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return(
    <>
      <h1>{value}</h1>
      <input onChange={handleOnChange} value={value} />
    </>
  );
};
export default Fifteen;




