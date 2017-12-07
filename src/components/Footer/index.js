import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import LogoIcon from '../LogoIcon';
import Typography from 'material-ui/Typography';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    shades: 'dark',
  },
});

const styles = theme => ({
  root: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    background: theme.palette.shades.dark.background.default,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  icon: {
    margin: theme.spacing.unit,
    fill: theme.palette.common.white,
    width: 'auto',
    height: 50,
  },
})

class Footer extends Component {
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <Grid container className={this.props.classes.root}>
          <Grid item xs={12}>
            <Grid container className={this.props.classes.container}>
              <Grid item xs={12} md={6} style={{textAlign: "center"}}>
                <LogoIcon className={this.props.classes.icon} />
              </Grid>
              <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
                <Typography type = "title">
                  Consultas
                </Typography>
                <Typography type = "subheading">
                  info@doghouse.com.ar
                </Typography>
                <Typography type = "subheading">
                  Terminos de Uso
                </Typography>
              </Grid>
            </Grid>
            <Grid container className={this.props.classes.root}>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography type = "caption">
                  Hecho con ♥ para tus perros
                </Typography>
                <Typography type = "caption">
                  Hospedá tu mascota en el comfort de un hogar: encontrá Anfitriones 5 estrellas, seguí la estancia mediante fotos y videos, y contá con la Garantía Veterinaria.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Footer);
