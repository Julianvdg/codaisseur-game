import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'

class Bar extends Component {


  goDown(){
    const stageReference = 0
    this.props.changeStage(stageReference)
  }


  render() {

    let backgroundStyle = {
      backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473426554/bar_b2hsc1.jpg")',
      width: '880px',
      height: '580px',
      margin: '0 auto',
      position: 'relative',
      borderRadius: '10px',
      border: '10px solid #d3d3d3',
    };

    let useLift = {
      height: '195px',
      width: '85px',
      position: 'absolute',
      left: '350px',
      bottom: '170px',
      cursor: 'pointer',
      backgroundColor: 'red'
    }
    console.log(this.props)
    return(
      <div style={backgroundStyle}>
        <div style={useLift} onClick={this.goDown.bind(this)}></div>
        <DialogBox/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default Bar
