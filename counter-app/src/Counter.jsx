import PropTypes from 'prop-types';
import { useState } from 'react';

const Counter = ({ value }) => {
  const [number, setNumber] = useState(value);

  function handleAdd() {
    setNumber((prevNum) => prevNum + 1);
  }

  function substract() {
    setNumber((prevNum) => prevNum - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <div className='counter'>
        <button className='button' onClick={substract}>
          -
        </button>
        <h2> {number} </h2>
        <button className='button' onClick={handleAdd}>
          +
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
