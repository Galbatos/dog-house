import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    paddingRight: theme.spacing.unit *2,
    paddingLeft: theme.spacing.unit *2,
  },
  item: {
    paddingRight: theme.spacing.unit *2,
    paddingLeft: theme.spacing.unit *2,
  },
});


class Hero3Cols extends Component {
  render() {
    const children = this.props.children

    return(
      <Grid container spacing={0} justyfy="center" className={this.props.classes.root} style={{backgroundColor: this.props.fondo}}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Typography type = "display1" paragraph style={{ marginBottom: '3rem'}}>
            {this.props.title}
          </Typography>
        </Grid>
        <Grid container spacing={0} justyfy="center">
          {React.Children.map(children, (child,i) => {
          return (
            <Grid key={i} item xs={12} md={4} className={this.props.classes.item} style={{marginRight: 'auto', marginLeft: 'auto', textAlign: 'center'}}>
              {child}
            </Grid>
          );
        })}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Hero3Cols);
