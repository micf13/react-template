import React,{ useState }from 'react';
import PgHeader from './components/general/PgHeader';
import HomePage from './components/home/HomePage';
import Hooks from './components/hooks/Hooks';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/about/AboutPage';
import PageNotFound from './components/PgNotFound/PageNotFound';

function App() {

function toggleDark() {
  var element = document.getElementById("container-fluid");
  element.classList.toggle("dark-mode");
  document.body.classList.toggle("dark-mode");
} 
  return (
      <div className='container-fluid' id='container-fluid'>
        <PgHeader toggleDark={toggleDark}></PgHeader>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/hooks" component={Hooks}></Route>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
  );
}

export default App;
