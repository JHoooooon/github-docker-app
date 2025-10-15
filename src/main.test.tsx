import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the app component', () => {
    const { getByText } = render(<App />);
    const buttonElm = getByText(/Count/);
    expect(buttonElm).toBeInTheDocument();
  });
});
