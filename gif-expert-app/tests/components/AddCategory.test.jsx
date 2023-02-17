import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../../src/components/AddCategory';

describe('<AddCategory /> tests', () => {
  test('should change text value', () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'test' } });

    expect(input.value).toBe('test');

    // screen.debug();
  });

  test('should call onAddCategory if input has a value', () => {
    const inputValue = 'test';

    render(<AddCategory onAddCategory={() => {}} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
  });
});
