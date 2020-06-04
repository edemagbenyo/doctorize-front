import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Welcome from '../containers/Welcome';


afterEach(cleanup);

describe('welcome', () => {
  it('renders', () => {
    const { asFragment } = render(<Welcome />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('contains a text', () => {
    const { debug } = render(<Welcome />);
    const text = screen.getByText('Welcome page');
    expect(text).toBeTruthy();
  });
});
