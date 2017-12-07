import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import SearchIcon from 'material-ui-icons/Search';
import AccessibilityIcon from 'material-ui-icons/Accessibility';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';

const styles = {
  root: {
    display: 'flex',
    zIndex: 1,
  },
};

class MenuA extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Manager>
          <Target>
            <IconButton
              color="contrast"
              aria-label="Menu"
              aria-owns={open ? 'menu-list' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
          </Target>
          <Popper placement="bottom-start" eventsEnabled={open}>
            <ClickAwayListener onClickAway={this.handleRequestClose}>
              <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem onClick={this.handleRequestClose}>
                      <AccountCircle className={classes.leftIcon} />
                      Ingresar
                    </MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>
                      <SearchIcon className={classes.leftIcon} />
                      Encontrar Cuidador
                    </MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>
                      <AccessibilityIcon className={classes.leftIcon} />
                      Ser Anfitrion
                    </MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </div>
    );
  }
}

MenuA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuA);
