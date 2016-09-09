import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import showFirstStage from '../actions/show-first-stage'

class Stage extends Component {

  componentDidMount(){
    this.props.showFirstStage()
  }

  render() {
    return(
      <div>
        <h1> Stage Container </h1>
        <h2> { this.props.currentStage } </h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentStage: state.stage
  }
}


export default connect(mapStateToProps, { showFirstStage })(Stage)
