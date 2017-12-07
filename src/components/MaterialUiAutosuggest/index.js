import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { AutosuggestPlaces } from 'react-autosuggest-places'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: '100%',
    margin: '0 0'
  },
  container: {
    flexGrow: 1,
    position: 'relative',
    margin: theme.spacing.unit * 2
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  textField: {
    width: '100%',
  }
})

const renderInput = ({ classes, autoFocus, value, ref, label, ...other }) => (
  <TextField
    autoFocus={autoFocus}
    className={classes.textField}
    value={value}
    label={label}
    inputRef={ref}
    InputProps={{
      classes: {
        input: classes.input
      },
      ...other
    }}
  />
)

const renderSuggestion = ({ description }, { query, isHighlighted }) => (
  <MenuItem selected={isHighlighted} component="div">
    {description}
  </MenuItem>
)

const renderSuggestionContainer = ({ containerProps, children, query }) => (
  <Paper {...containerProps} square>
    {children}
  </Paper>
)

class MaterialUiAutosuggest extends Component {
  state = {
    value: ''
  }

  onChange = value => this.setState({ value })

  onSelect = console.log

  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
        <div className={classes.root}>
          <AutosuggestPlaces
            theme={{
              container: classes.container,
              suggestionsContainerOpen: classes.suggestionsContainerOpen,
              suggestionsList: classes.suggestionsList,
              suggestion: classes.suggestion
            }}
            value={value}
            renderInput={renderInput}
            renderSuggestionContainer={renderSuggestionContainer}
            renderSuggestion={renderSuggestion}
            onChange={this.onChange}
            onSelect={this.onSelect}
            inputProps={{
              classes,
              placeholder: '¿Dónde vives?',
              label: 'Dirección'
            }}
            googleApiOptions={{
              types:['address'],
              componentRestrictions: {country: 'ar'}
            }}
          />
        </div>
    )
  }
}

export default withStyles(styles)(MaterialUiAutosuggest)
