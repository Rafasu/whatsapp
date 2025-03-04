import React, {useState} from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider.js";


function App() {
    const [{user}, dispatch] = useStateValue();
    
    
  return (
    <div className="app">
      {!user ? (
        <Login />
      
       ) : (
     <div className="app--body">
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/rooms/:roomId">
                    <Chat />
                </Route>
                <Route path="/">
                    <Chat />
                </Route>
            
                
            </Switch>
          </Router>
      </div>
        )}
   
        </div>
  );
}

export default App;
