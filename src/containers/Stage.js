import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Stage extends Component {

  render() {
    return(
      <div>
        <h1> Stage Container </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, {})(Stage)
