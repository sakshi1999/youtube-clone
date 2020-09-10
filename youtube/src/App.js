import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommenedVideos from './RecommenedVideos';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Router>
       <Header/>
        <Switch>
        
          <Route exact path="/"> 
             <div className="app__page">
                <Sidebar/>
                <RecommenedVideos/>
             </div>
          </Route>
          <Route  path="/search/:searchTerm">
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
