import PropTypes from 'prop-types';
import { useState } from 'react';

const Counter = ({ value }) => {
  const [number, setNumber] = useState(value);

  function handleAdd() {
    setNumber((prevNum) => prevNum + 1);
  }

  function handleSubtract() {
    setNumber((prevNum) => prevNum - 1);
  }

  function handleReset() {
    setNumber((prevNum) => (prevNum = value));
  }

  return (
    <>
      <h1>Counter App</h1>
      <div className='counter'>
        <button className='button' onClick={handleSubtract}>
          -
        </button>
        <h2> {number} </h2>
        <button className='button' onClick={handleAdd}>
          +
        </button>
        <button className='button' onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
};

Counter.defaultProps = {
  value: 0,
};

export default Counter;
