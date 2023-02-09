import { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search Gifs'
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

export default AddCategory;
