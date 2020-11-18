import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import Recommendation from './Recommendation';

describe('Recommendation component', () => {
  afterEach(() => cleanup());
  it('renders Recommendation', () => {
    let fetch = fetch
    const { asFragment } = render(<Recommendation fetch={fetch}/>);
    expect(asFragment()).toMatchSnapshot();
  });
  
it('changes the athlete id text when the text input is changed', async() => {
  render(<Recommendation />);
  const textInput = await screen.findByPlaceholderText('Your Athlete ID');

  fireEvent.change(textInput, { target: { value: 1 } });
  await waitFor(() => {
    expect(textInput.value).toBe('1');
  });
});
});