import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Bar extends Component {


  goDown(){
    const stageReference = 0
    this.props.changeStage(stageReference)
  }


  render() {

    let backgroundStyle = {
      backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473412718/bar_mkrl4k.jpg")',
      width: '1200px',
      height: '800px',
    };

    let useLift = {
      height: '250px',
      width: '110px',
      position: 'absolute',
      left: '480px',
      bottom: '132px',
      cursor: 'pointer'
    }
    console.log(this.props)
    return(
      <div style={backgroundStyle}>
        <h1> Bar Component </h1>
        <div style={useLift} onClick={this.goDown.bind(this)}></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default Bar
