import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory';

describe('<AddCategory /> tests', () => {
  test('should change text value', () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'hades' } });

    expect(input.value).toBe('hades');

    // screen.debug();
  });
});
