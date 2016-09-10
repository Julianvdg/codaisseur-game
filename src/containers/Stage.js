import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import showFirstStage from '../actions/show-first-stage'
import changeStage from '../actions/change-stage'


import Entrance from '../components/stages/entrance'
import Reception from '../components/stages/reception'
import Stairway from '../components/stages/stairway'
import Bar from '../components/stages/bar'
import Kitchen from '../components/stages/kitchen'
import Hallway from '../components/stages/hallway'
import Office from '../components/stages/office'
import Classroom from '../components/stages/classroom'
import Macbook from '../components/stages/macbook'
import Arcade from '../components/stages/arcade'
import Recruiter from '../components/stages/recruiter'

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
       <Reception changeStage={ this.changeStage.bind(this) }/>,
       <Stairway changeStage={ this.changeStage.bind(this) }/>,
       <Bar changeStage={ this.changeStage.bind(this) }/>,
       <Kitchen changeStage={ this.changeStage.bind(this) }/>,
       <Hallway changeStage={ this.changeStage.bind(this) }/>,
       <Office changeStage={ this.changeStage.bind(this) }/>,
       <Classroom changeStage={ this.changeStage.bind(this) }/>,
       <Macbook changeStage={ this.changeStage.bind(this) }/>,
       <Arcade changeStage={ this.changeStage.bind(this) }/>,
       <Recruiter changeStage={ this.changeStage.bind(this) }/>,
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
