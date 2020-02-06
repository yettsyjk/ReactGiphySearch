import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './Layout';
import SearchContainer from './SearchContainer';

import './index.css';

//import searchContainer in to App.js
//dont place this.state because it requires extra lifting
//
function App() {
  return (
    <main>
      <Switch>
     <div className="app">
       <div className="searchContainer">
      <Route exact path="/" render={(props) => <SearchContainer {...props}/> }/>
      
      </div>
      </div>
        </Switch>
      </main>
  );
}

export default App;
