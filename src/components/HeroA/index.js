import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import CircleImage from '../CircleImage/';
import Divider from 'material-ui/Divider';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

const styles = theme => ({
  root: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: theme.spacing.unit * 2,
  },
  divider: {
    width: '80%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit *2,
    marginRight: 'auto',
    marginLeft: 'auto',
  }
})

class HeroA extends Component {
  render() {
    return(
      <div>
      <Grid container spacing={0} className={this.props.classes.root}>
            <Grid item xs={12}>
              <Typography type = "display1" color = "inherit" style={{ textAlign: "center" }}>
                {this.props.title}
              </Typography>
              <Typography type = "subheading" color = "inherit" style={{ textAlign: "center" }}>
                {this.props.text}
              </Typography>
              <div className={this.props.classes.container}>
                <CircleImage
                  title="Encontrá un Anfitrión"
                  text="Lee las evaluaciones, organiza un pre-encuentro y conversa con Héroes que viven cerca tuyo"
                  image={image1}
                  alt="imagen1"
                />
                <CircleImage
                  title="Pagá por la plataforma"
                  text="Confirma la reserva, paga a través de la web DogHouse y cuenta con el soporte de la Garantía Veterinaria"
                  image={image2}
                  alt="imagen2"
                />
                <CircleImage
                  title="Viajá tranquilo"
                  text="Todos los días, tu Anfitrión te enviará fotos y videos del hospedaje de tu perrito"
                  image={image3}
                  alt="imagen1"
                />
              </div>

            </Grid>

      </Grid>
      <Divider className={this.props.classes.divider} />
    </div>
    );
  }
}

export default withStyles(styles)(HeroA);
