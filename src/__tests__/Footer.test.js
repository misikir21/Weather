import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';

describe('Footer', () => {
  it('render copyright correctly', () => {
    render(<Footer />);

    const copyRight = screen.getByText('@Copyright');
    expect(copyRight).toBeInTheDocument();
  });

  it('render creator correctly', () => {
    render(<Footer />);

    const creator = screen.getByText('Created by Binyam Yohannes');
    expect(creator).toBeInTheDocument();
  });
});
