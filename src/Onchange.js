import{ useState } from 'react';

const Onchange = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Enter Text:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}/>
      </label>
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default Onchange;
