import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Header from './components/Header/';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
    <Footer/>
  </div>
)

export default App;
