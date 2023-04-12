import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PathListItem from './methods';

describe('<PathListItem />', () => {
  test('it should mount', () => {
    render(<PathListItem />);
    
    const pathListItem = screen.getByTestId('PathListItem');

    expect(pathListItem).toBeInTheDocument();
  });
});