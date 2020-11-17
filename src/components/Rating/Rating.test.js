import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import Rating from './Rating';

describe('Rating component', () => {
  afterEach(() => cleanup());
//   // it('renders Rating', () => {
//   //   const { asFragment } = render(<Rating />);
//   //   expect(asFragment()).toMatchSnapshot();
//   // });
  
// it('changes the athlete id text when the text input is changed', async() => {
//   render(<Rating />);
//   const textInput = await screen.findByLabelText('athleteID');
//   const display = await screen.findByTestId('athleteID');

//   fireEvent.change(textInput, { target: { value: 1 } });
//   await waitFor(() => {
//     expect(display).toHaveTextContent(1);
//   });
// });
});
