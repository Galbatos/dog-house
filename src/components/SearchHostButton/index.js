import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

class SearchHostButton extends Component {
  render(){
    return(
      <Button raised color="primary" type="submit">Encontrar un Cuidador</Button>
    );
  }
}

export default withStyles()(SearchHostButton);
