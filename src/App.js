import React from 'react';
import PgHeader from './components/general/PgHeader';
import HomePage from './components/home/HomePage';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './components/about/AboutPage';
import PageNotFound from './components/PgNotFound/PageNotFound';

function App() {
  return (
    <div className='container-fluid'>
      <PgHeader></PgHeader>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage}></Route>
        <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
