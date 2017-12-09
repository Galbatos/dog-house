import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Hero2Columns from '../../components/Hero2Columns';
import image from './images/Hero.jpg';

class Hostes extends Component {
  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Hero2Columns
            image={image}
            title="¿Te apasionan los perros?"
            text1="¿Te encanta cuando tus amigos o la familia te dejan el perro para que lo cuides? ¿Te parece una buena idea transformar ese amor en dinero extra? Entonces ¡conviértete en Anfitrión DogHouse!"
            text2="Somos una plataforma que conecta a dueños de mascotas con anfitriones que hospedan perros y cachorros en sus casas, brindando todo su cariño y seguridad."
          />
        </Grid>
      </Grid>
    );
  }
}

export default Hostes;
