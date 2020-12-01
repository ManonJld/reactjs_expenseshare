import {Switch, Route} from 'react-router-dom';
import React from 'react';
import './App.scss';
import Homepage from "./components/pages/Homepage";
import Joinpage from "./components/pages/Joinpage";
import Createpage from "./components/pages/Createpage";
import Aboutpage from "./components/pages/Aboutpage";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/join' component={Joinpage}/>
        <Route path='/create' component={Createpage}/>
        <Route path='/about' component={Aboutpage}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
