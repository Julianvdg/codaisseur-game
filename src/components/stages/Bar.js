import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Bar extends Component {



  render() {

    return(
      <div>
        <h1> Bar Component </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default Bar
