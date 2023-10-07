import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer/Footer';

describe('Snapshot Tests', () => {
  it('renders Footer correctly', () => {
    const footerComponent = renderer.create(<Footer />).toJSON();
    expect(footerComponent).toMatchSnapshot();
  });
});
