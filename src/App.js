import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import GlobalStyle from './assets/styles/globalStyles';
import {Route} from 'react-router-dom';

const App = () =>  {
  return (
    <>
      <GlobalStyle/>
      <Route exact path='/' component={Homepage}/>
    </>
  );
}

export default App;
