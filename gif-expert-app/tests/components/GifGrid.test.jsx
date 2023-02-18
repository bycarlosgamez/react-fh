import { render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';

describe('<GidGri /> test', () => {
  const category = 'test';

  test('should initially show loading', () => {
    render(<GifGrid category={category} />);

    // screen.debug();

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });
});
