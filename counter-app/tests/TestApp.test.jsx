import { render } from '@testing-library/react';
import { TestApp } from '../src/TestApp';

describe('<TestApp /> test', () => {
  test('must match with snapshot', () => {
    // const title = 'Counter App';
    render(<TestApp />);
  });
});
