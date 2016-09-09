import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import showFirstStage from '../actions/show-first-stage'
import changeStage from '../actions/change-stage'
import Bar from '../components/stages/bar'

class Stage extends Component {

  componentDidMount(){
    this.props.showFirstStage()
  }

  changeStage(){
    this.props.changeStage()
  }

  render() {
    return(
      <div>
        <h1> Stage Container </h1>
        <h2> { this.props.currentStage } </h2>
        <button onClick={this.changeStage.bind(this)}> +1 </button>
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
