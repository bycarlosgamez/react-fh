import { render, screen } from '@testing-library/react';
import GifGrid from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('<GidGri /> test', () => {
  const category = 'test';

  test('should initially show loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    // screen.debug();

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });
});
