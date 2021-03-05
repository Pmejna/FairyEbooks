import React from 'react';
import GlobalStyle from './assets/styles/globalStyles';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';

const App = () =>  {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </>
  );
}

export default App;
