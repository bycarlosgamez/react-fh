import { render, screen } from '@testing-library/react';
import GifCard from '../../src/components/GifCard';

describe('<GifCard /> Tests', () => {
  const title = 'TEST';
  const url = 'https://google.com';
  test('must match with snapshot', () => {
    const { container } = render(<GifCard url={url} title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show img with url and correct alt', () => {
    render(<GifCard url={url} title={title} />);
    // screen.debug();
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url + '/');
    expect(alt).toBe(title);
  });

  test('should show title', () => {
    render(<GifCard url={url} title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
