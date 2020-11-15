import React from 'react';
import Header from '../Header/Header';
import Rating from '../Rating/Rating';
import Recommendation from '../Recommendation/Recommendation';
// import { Provider } from '../../Hooks/Provider';

export default function App() {
  return (
    <>
    {/* <Provider> */}
      <Header/>
      <Rating/>
      <Recommendation/>
    {/* </Provider> */}
    </>
  );
}
