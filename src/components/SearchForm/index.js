import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import MaterialUiAutosuggest from '../MaterialUiAutosuggest/';
import { DatePicker } from 'material-ui-pickers';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import SearchHostButton from '../SearchHostButton';
import 'moment/locale/es';

moment.locale('es')

const styles = theme => ({
  input: {
    minWidth: 200,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  controls: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: theme.spacing.unit * 2,
  },
  menu: {
    width: 200,
  },
})

const sizes = [
  {
    value: '1',
    label: 'Hasta 5Kg',
  },
  {
    value: '2',
    label: '5-10 Kg',
  },
  {
    value: '3',
    label: '10-20 Kg',
  },
  {
    value: '4',
    label: '10-40 Kg',
  },
  {
    value: '5',
    label: '+40Kg'
  },
];

class SearchForm extends Component {
  state = {
    selectedDateIn: moment(),
    selectedDateOut: moment(),
    size: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
  };

  handleDateInChange = (date) => {
    this.setState({ selectedDateIn: date });
  }

  handleDateOutChange = (date) => {
    this.setState({ selectedDateOut: date });
  }

  handleSizeChange = event => {
    this.setState({ size: event.target.value })
  }

  render() {
    const { selectedDateIn, selectedDateOut } = this.state;

    return (
      <Grid container spacing={0} justify="center">
        <Grid item xs={12} md={8}>
          <Card style={{margin: 30}}>
            <CardContent style={{ textAlign: "center" }}>
              <form onSubmit={this.handleFormSubmit}>
                <MaterialUiAutosuggest/>
                <div className={this.props.classes.controls}>
                  <DatePicker
                    value={selectedDateIn}
                    onChange={this.handleDateInChange}
                    animateYearScrolling={false}
                    label="Entrada"
                    className={this.props.classes.input}
                    format="DD/MM/YYYY"
                  />
                  <DatePicker
                    value={selectedDateOut}
                    onChange={this.handleDateOutChange}
                    animateYearScrolling={false}
                    label="Salida"
                    className={this.props.classes.input}
                    format="DD/MM/YYYY"
                  />
                  <TextField
                    id="select-size"
                    select
                    label="Tamaño de Mascota"
                    placeholder="Selección por Peso"
                    value={this.state.size}
                    onChange={this.handleSizeChange}
                    className={this.props.classes.input}
                    SelectProps={{
                      MenuProps: {
                        className: this.props.classes.menu,
                      },
                    }}
                  >
                    {sizes.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <SearchHostButton />
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SearchForm);
