import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import showFirstStage from '../actions/show-first-stage'
import changeStage from '../actions/change-stage'

import Bar from '../components/stages/bar'
import Entrance from '../components/stages/entrance'

class Stage extends Component {

  componentDidMount(){
    this.props.showFirstStage()
  }

  changeStage(){
    this.props.changeStage()
  }

  renderCurrentStage() {
    const stages = [ <Entrance/>, <Bar/>, ]
    return (
      stages[this.props.currentStage]
      )
  }

  render() {
    return(
      <div>
        <h1> Stage Container </h1>
        <h2> { this.props.currentStage } </h2>
        {this.renderCurrentStage()}
        <button onClick={this.changeStage.bind(this)}> Change The Stage!!11! </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentStage: state.stage
  }
}


export default connect(mapStateToProps, { showFirstStage, changeStage,  })(Stage)
