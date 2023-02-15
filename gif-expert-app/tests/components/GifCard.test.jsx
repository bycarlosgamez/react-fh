import { render } from '@testing-library/react';
import GifCard from '../../src/components/GifCard';

describe('<GifCard /> Tests', () => {
  const title = 'TEST';
  const url = 'https://google.com';
  test('must match with snapshot', () => {
    const { container } = render(<GifCard url={url} title={title} />);
    expect(container).toMatchSnapshot();
  });
});
