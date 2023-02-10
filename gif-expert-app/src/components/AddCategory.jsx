import { useState } from 'react';

const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newInputValue = inputValue.trim().toLowerCase();
    if (newInputValue.length <= 1) return;
    onAddCategory(newInputValue);
    setInputValue('');
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
