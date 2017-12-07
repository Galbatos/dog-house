import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 300,
  },
  image: {
    borderRadius: '50%',
    maxWidth: 300,
    marginBottom: theme.spacing.unit * 2,
  }
})

class CircleImage extends Component {
  render() {
    return(
      <div className={this.props.classes.root}>
        <img src={this.props.image} alt={this.props.alt} className={this.props.classes.image}/>
        <Typography type = "title" color = "inherit" style={{ textAlign: "center", fontWeight: "bold" }}>
          {this.props.title}
        </Typography>
        <Typography type = "subheading" color = "inherit" style={{ textAlign: "center", fontStyle: "italic" }}>
          {this.props.text}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(CircleImage);
