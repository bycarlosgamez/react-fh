import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={handleSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Search Gifs'
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};

export default AddCategory;
