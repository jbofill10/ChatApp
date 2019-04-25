import React from 'react';
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import DefaultView from './views/DefaultView';
import JoinView from './views/JoinView';

function App() {
  return (
    <BrowserRouter>
    <div className="App"
    style={{
      overflow:"hidden"
      }}
    >
    <Route
        exact
        path="/"
        component={DefaultView}
        
    ></Route>

    <Route
      exact
      path="/join"
      component={JoinView}
      ></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
