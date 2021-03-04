import React from 'react';
import GlobalStyle from './assets/styles/globalStyles';
import {Route} from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/ShopPage';

const App = () =>  {
  return (
    <>
      <GlobalStyle/>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </>
  );
}

export default App;
