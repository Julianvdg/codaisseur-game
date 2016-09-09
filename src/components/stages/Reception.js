import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'

class Reception extends Component {

  goToStairway(){
    const stageReference = 2
    this.props.changeStage(stageReference)
  }



  render() {

    let arrowRight = {
      width: '120px',
      position: 'absolute',
      right: '70px',
      top: '200px',
      cursor: 'pointer'
    }

    let backgroundStyle = {
      backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473443966/receptie_gq9fbj.jpg")',
      width: '880px',
      height: '580px',
      margin: '0 auto',
      position: 'relative',
      borderRadius: '10px',
      border: '10px solid #d3d3d3',
    };


    console.log(this.props)
    return(
      <div style={backgroundStyle}>
      <img src={'http://res.cloudinary.com/juvdg/image/upload/v1473444538/arrow_zhtwoy.png'} style={arrowRight} onClick={this.goToStairway.bind(this) } />
        <DialogBox/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default Reception
