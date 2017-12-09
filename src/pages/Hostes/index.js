import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import image from './images/Hero.jpg';
import Hero2Columns from '../../components/Hero2Columns/';
import Hero3Cols from '../../components/Hero3Cols/';
import IconCardVert from '../../components/IconCardVert/';
import DogBallonIcon from '../../components/DogBallonIcon/';
import MoneyIcon from '../../components/MoneyIcon/';
import ConversationIcon from '../../components/ConversationIcon/';
import { withStyles } from 'material-ui/styles';
import SimpleCard from '../../components/SimpleCard/';

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit,
    width: 'auto',
    height: 60,
    fill: '#3f51b5',
  },
})

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
          <Hero3Cols title="Por qué ser un Anfitrión DogHouse">
            <IconCardVert text="Un perro para ti, cuando quieras.">
              <DogBallonIcon className={this.props.classes.icon}/>
            </IconCardVert>
            <IconCardVert text="Dinero extra, siempre bienvenido">
              <MoneyIcon className={this.props.classes.icon}/>
            </IconCardVert>
            <IconCardVert text="Nosotros nos ocupamos de acercarte a los clientes">
              <ConversationIcon className={this.props.classes.icon}/>
            </IconCardVert>
          </Hero3Cols>
          <Hero3Cols title="Al Anfitrión, toda nuestra ayuda" fondo="#fafafa">
            <SimpleCard
              title="Reservas en línea, fácil y seguro"
              text="Los dueños te contactan y decides cuáles perros quieres hospedar y cuándo. La reserva se hace de forma segura por la plataforma DogHouse."
            />
            <SimpleCard
              title="Facilidades de pago"
              text="Por cada reserva confirmada, cobramos una tarifa de servicio a los huéspedes para cubrir los gastos de uso de nuestra plataforma. El Anfitrión recibe 75% del subtotal de la reserva."
            />
            <SimpleCard
              title="Garantía veterinaria"
              text="Si el perro se enferma o se lastima durante la estancia en tu casa, DogHouse reembolsa los gastos con el veterinario."
            />
          </Hero3Cols>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Hostes);
