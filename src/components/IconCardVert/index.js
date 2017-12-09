import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


class IconCardVert extends Component {
  render(){
    return(
      <Grid container spacing={0}>
        <Grid item xs={12}>
          {this.props.children}
        </Grid>
        <Grid item xs={12}>
          <Typography type = "title" color="primary" paragraph>
            {this.props.title}
          </Typography>
          <Typography type = "subheading" paragraph>
            {this.props.text}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles()(IconCardVert)
