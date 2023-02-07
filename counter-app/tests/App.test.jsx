import { render } from '@testing-library/react';
import { App } from '../src/App';

describe('<App /> test', () => {
  test('must match with snapshot', () => {
    // const title = 'Counter App';
    render(<App />);
  });
});
