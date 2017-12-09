import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Header from './components/Header/';
import Footer from './components/Footer';
import Hostes from './pages/Hostes/';
import Grid from 'material-ui/Grid';

const App = () => (
  <Grid container spacing={0} style={{ width: '100%' }}>
    <Grid item xs={12}>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/hostes' component={Hostes}/>
      </Switch>
      <Footer/>
    </Grid>
  </Grid>
)

export default App;
