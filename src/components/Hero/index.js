import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import SearchForm from '../SearchForm/'
import './hero.css';


class Hero extends Component {
  render() {

    return(
      <Grid container spacing={0} className ="hero-image hero-text">
            <Grid item xs={12}>
              <Typography type = "display1" color = "inherit" style={{ textAlign: "center" }}>
                {this.props.title}
              </Typography>
              <Typography type = "subheading" color = "inherit" style={{ textAlign: "center" }}>
                {this.props.text}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{color: "#4f4f4f"}}>
              <SearchForm/>
            </Grid>
      </Grid>
    );
  }
}

export default Hero;
