import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AccountCircle from 'material-ui-icons/AccountCircle';
import SearchIcon from 'material-ui-icons/Search';
import AccessibilityIcon from 'material-ui-icons/Accessibility';
import Hidden from 'material-ui/Hidden';
import Logo from '../Logo/';
import MenuA from '../MenuA/';

const styles = theme => ({
  flex: {
    flex: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Header extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;

    return (
          <AppBar position="static">
            <Toolbar>
              <Hidden mdUp>
                <MenuA />
                <Typography color="inherit" className={classes.flex} align="right">
                  <Logo />
                </Typography>
              </Hidden>
              <Hidden smDown>
                <Typography type="title" color="inherit" className={classes.flex}>
                  <Logo />
                </Typography>
                <Button className={classes.button} color="contrast">
                  <AccessibilityIcon className={classes.leftIcon} />
                  Ser Anfitrion
                </Button>
                <Button className={classes.button} color="contrast">
                  <SearchIcon className={classes.leftIcon} />
                  Encontrar Cuidador
                </Button>
                <Button className={classes.button} color="contrast">
                  <AccountCircle className={classes.leftIcon} />
                  Ingresar
                </Button>
              </Hidden>
            </Toolbar>
          </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
