import { useState } from 'react';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories((prevCategories) => [inputValue, ...prevCategories]);
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
