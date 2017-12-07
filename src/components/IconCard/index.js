import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: theme.spacing.unit * 2,
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
    marginTop: theme.spacing.unit * 4,
    marginRight: 'auto',
    marginLeft: 'auto',

  }
})

class IconCard extends Component{
  render(){
    return (
          <Grid container alignItems="center" justify="center">
            <Grid item xs={4} style={{textAlign: "center"}}>
              {this.props.children}
            </Grid>
            <Grid item xs={8}>
              <Typography type = "title" color="primary">
                {this.props.title}
              </Typography>
              <Typography type = "subheading">
                {this.props.text}
              </Typography>
            </Grid>
          </Grid>
    );
  }
}

export default withStyles(styles)(IconCard)
