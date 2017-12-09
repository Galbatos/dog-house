import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    paddingTop: '3rem',
    paddingBottom: '3rem',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    color: theme.palette.common.white,
    paddingRight: theme.spacing.unit *2,
    paddingLeft: theme.spacing.unit *2,
  },
  spacing: {
    marginTop: theme.spacing.unit * 4,
  },
  item: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  button: {
    width: '100%',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
})

class Hero2Columns extends Component {
  render() {
    return (
      <Grid container spacing={0} className={this.props.classes.root} style={{ backgroundImage: 'url('+this.props.image+')' }}>
        <Grid item xs={12} md={4} className={this.props.classes.item}>
          <Typography type = "display1" color="inherit" className={this.props.classes.spacing} style={{ textAlign: "center" }}>
            {this.props.title}
          </Typography>
          <Typography type = "subheading" className={this.props.classes.spacing} color="inherit" style={{ textAlign: "justify" }}>
            {this.props.text1}
          </Typography>
          <Typography type = "subheading" className={this.props.classes.spacing} color="inherit" style={{ textAlign: "justify" }}>
            {this.props.text2}
          </Typography>
          <Button raised color="primary" className={this.props.classes.button}>Ser Anfitrion</Button>
        </Grid>
        <Grid item xs={12} md={4} className={this.props.classes.item}>

        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Hero2Columns);
