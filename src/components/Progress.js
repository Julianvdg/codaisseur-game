import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ProgressBar from 'virtual-progress-bar'

const style = {
    box: {
}
}
class Progress extends Component {

  var progressBar = ProgressBar.render(React.createElement, {
    containerColor: containerColor,
    direction: direction,
    meterColor: meterColor,
    percent: percent
  })

  render() {

    return (
      <div style={style.box}>
        <progressBar/>
      </div>
    )
  }
}



export default Progress;
