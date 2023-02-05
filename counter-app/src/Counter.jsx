import PropTypes from 'prop-types';

const Counter = ({ value }) => {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
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
