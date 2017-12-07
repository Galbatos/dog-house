import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Stars from 'material-ui-icons/Stars';
import LocalHospital from 'material-ui-icons/LocalHospital';
import PhotoCamera from 'material-ui-icons/PhotoCamera';
import Chat from 'material-ui-icons/Chat';
import IconCard from '../IconCard';
import SearchHostButton from '../SearchHostButton';


const styles = theme => ({
  root: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  divider: {
    width: '80%',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginRight: 'auto',
    marginLeft: 'auto',

  },
  icon: {
    width: 100,
    height: 100,
    marginTop: theme.spacing.unit * 8,
  }
})

class HeroB extends Component {
  render() {
    return(
      <div>
        <Grid container spacing={0} className={this.props.classes.root}>
          <Grid item xs={12}>
            <Typography type = "display1" color = "primary" style={{ textAlign: 'center' }}>
              {this.props.title}
            </Typography>
            <Typography type = "subheading" color = "inherit" style={{ textAlign: 'center' }}>
              {this.props.text}
            </Typography>
            <Grid container className={this.props.classes.container}>
              <Grid item xs={12} md={6}>
                <IconCard
                  title="Anfitriones cualificados"
                  text="Nuestros Cuidadores pasan un riguroso proceso de selección y tienen sus habilidades mejoradas con nuestras continua formación."
                >
                  <Stars className={this.props.classes.icon}/>
                </IconCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <IconCard title="100% seguro" text="Tu perrito estará cubierto por la Garantía Veterinaria DogHouse de hasta $15.000">
                  <LocalHospital className={this.props.classes.icon}/>
                </IconCard>
              </Grid>
            </Grid>
            <Grid container className={this.props.classes.container}>
              <Grid item xs={12} md={6}>
                <IconCard
                  title="Acompañá el hospedaje"
                  text="Tu Anfitrión te mantendrá informado sobre todo lo que sucede con tu perrito mediante fotos y videos"
                >
                  <PhotoCamera className={this.props.classes.icon}/>
                </IconCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <IconCard
                  title="Atención"
                  text="Soporte de un equipo preparado para solucionar, por teléfono y mail, todas las dudas antes, durante y después del hospedaje"
                >
                  <Chat className={this.props.classes.icon}/>
                </IconCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={this.props.classes.container} alignItems="center" justify="center" style={{ marginTop: 30}}>
            <Grid item >
              <SearchHostButton />
            </Grid>
          </Grid>
        </Grid>
        <Divider className={this.props.classes.divider} />
    </div>
    );
  }
}

export default withStyles(styles)(HeroB);
