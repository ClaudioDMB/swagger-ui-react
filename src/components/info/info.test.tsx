import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Info from './info';

describe('<Info />', () => {
  test('it should mount', () => {
    render(<Info />);
    
    const info = screen.getByTestId('Info');

    expect(info).toBeInTheDocument();
  });
});