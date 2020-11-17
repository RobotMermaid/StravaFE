import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ShoeDetail from './ShoeDetail';

describe('Shoe Detail component', () => {
  afterEach(() => cleanup());
  it('renders Shoe Detail', () => {
    let shoe = {
      id: 1,
      model: 'Altra', 
      terrain: 'trail', 
      durable_miles: 400, 
      avg_stars: 4.5, 
      shoes_id: 3
    }
    const { asFragment } = render(<ShoeDetail shoe={shoe}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});