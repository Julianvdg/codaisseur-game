import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Inventory from './containers/Inventory'

// Actions


// Components
import Stage from './containers/Stage'

// Material UI Components
import mui from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Material UI Colors
import {
  red700,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red700,
    accent1Color: grey400,
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h1>WeWork Survival</h1>
          <Stage/>
          <Inventory/>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

App.propTypes = {}

export default connect(mapStateToProps, {})(App)
