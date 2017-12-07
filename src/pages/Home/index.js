import React, { Component } from 'react';
import Hero from '../../components/Hero/';
import HeroA from '../../components/HeroA/';
import HeroB from '../../components/HeroB/';
import Grid from 'material-ui/Grid';

class Home extends Component {
  render() {
    return (
      <Grid container spacing={0} style={{width:"100%"}}>
        <Grid item xs={12}>
          <Hero
            title="Hospeda un perrito en un hogar de verdad"
            text="Guardería canina en una casa: encontrá un Anfitrion para cuidar de tu perrito y viajá tranquilo"
          />
        </Grid>
        <Grid item xs={12}>
          <HeroA
            title="Tu perrito se sentirá en casa"
            text="Guardería canina en una casa: Mirá cómo hospedar a tu perro con DogHouse"
          />
        </Grid>
        <Grid item xs={12}>
          <HeroB
            title="Fácil, seguro y práctico"
            text="DogHouse garantiza toda la seguridad para vos viajar tranquilo"
          />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
