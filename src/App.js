import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommandedVideo from './RecommandedVideo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    
      <div className="App">
        <Router>
          <Header/>
          
          <Switch>

              
              <Route exact path="/">
                <div className="app__page">
                  <Sidebar/>
                  <RecommandedVideo/>
                </div>
              </Route>
              <Route path="/search/:searchTerm">
               <div className="app__page">
                  <Sidebar/>
                  <SearchPage/>
                </div>
              </Route>
              <Route path="/search">
               <div className="app__page">
                  <Sidebar/>
                  <SearchPage/>
                </div>
              </Route>
              
          </Switch>

        </Router>


       
      </div>
   
  );
}

export default App;
