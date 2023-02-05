import PropTypes from 'prop-types';

const App = ({ title, subtitle }) => {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};

App.defaultProps = {
  subtitle: 0,
};

export default App;
