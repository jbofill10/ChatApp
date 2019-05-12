import React from 'react';
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import DefaultView from './views/DefaultView';
import ChatView from './views/ChatView';

function App() {
  return (
    <BrowserRouter>
    <Route
      /*render={({...props}) => {
          return (
            
            <div className="JoinFromHome" style={{
              background: "radial-gradient(#034FFF,#021645)",
              transition: "opacity 0.4s",
              position: "absolute",
              opacity: props.location.pathname !== "/" ? 0 : 1,
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              zIndex: 0
            }}>,

            

            </div>);
        }}*/
    
      ></Route>
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
      exact path="/chat"
      component={ChatView}
      ></Route>
    </div>
    
    </BrowserRouter>
  );
}
export default App;
