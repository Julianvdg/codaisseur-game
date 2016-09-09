import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Entrance extends Component {

  render() {

    return(
      <div>
        <h1> Entrance Component </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default Entrance
