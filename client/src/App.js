import React from 'react';
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import DefaultView from './views/DefaultView';

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
    </div>
    </BrowserRouter>
  );
}

export default App;
