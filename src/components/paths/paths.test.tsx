import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PathList from './paths';

describe('<PathList />', () => {
  test('it should mount', () => {
    render(<PathList />);
    
    const pathList = screen.getByTestId('PathList');

    expect(pathList).toBeInTheDocument();
  });
});