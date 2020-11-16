import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Rating from '../Rating/Rating';
import Links from '../Links/Links';
import Recommendation from '../Recommendation/Recommendation';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      {/* <Links/> */}
        <Switch>
          <Route exact path="/" component={Rating}/>
          <Route exact path="/rec" component={Recommendation}/>
        </Switch>
    </BrowserRouter>
    </>
  );
}
