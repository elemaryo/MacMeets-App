import './App.css';
import React from 'react';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/HomePage/Navbar';
import GroupPage from './components/GroupPage/GroupPage';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Footer from './components/NavItems/Footer';
import CreateGroup from './components/CreateGroup/CreateGroup'
import SearchPage from './components/SearchPage/SearchPage';
import McMasterArt from './components/GroupPage/McMasterArt';
import McMasterSoccer from './components/GroupPage/McMasterSoccer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/Search Page" component={SearchPage}/>
        <Route exact path="/Create a group" component={CreateGroup}/>
        <Route exact path="/Group Page" component={GroupPage}/>
        <Route exact path="/Art Page" component={McMasterArt}/>
        <Route exact path="/Soccer Page" component={McMasterSoccer}/>
      </Router>
      <Footer/>
    </div>
  );
}


export default App;
