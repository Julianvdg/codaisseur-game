import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import showFirstStage from '../actions/show-first-stage'
import changeStage from '../actions/change-stage'

import Bar from '../components/stages/bar'
import Entrance from '../components/stages/entrance'
import Stairway from '../components/stages/stairway'


class Stage extends Component {

  componentDidMount(){
    this.props.showFirstStage()
  }

  changeStage(stageReference){
    this.props.changeStage(stageReference)
  }


  renderCurrentStage() {
    const stages = [
       <Entrance changeStage={ this.changeStage.bind(this) }/>,
       <Bar changeStage={ this.changeStage.bind(this) }/>,
     ]

    return (
      stages[this.props.currentStage]
      )
  }

  render() {
    return(
      <div>
        <h2> { this.props.currentStage } </h2>
        {this.renderCurrentStage()}
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
