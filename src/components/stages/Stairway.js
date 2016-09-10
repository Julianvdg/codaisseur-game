import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'

class Stairway extends Component {

  goIntoBar(){
    const stageReference = 3
    this.props.changeStage(stageReference)
  }


  render() {

    let backgroundStyle = {
      backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473429941/trappenhuis_fif5tk.jpg")',
      width: '880px',
      height: '580px',
      margin: '0 auto',
      position: 'relative',
      borderRadius: '10px',
      border: '10px solid #d3d3d3',
    };

    let enterBar = {
      height: '400px',
      width: '180px',
      position: 'absolute',
      right: '160px',
      bottom: '80px',
      cursor: 'pointer',
    }

    return(
      <div style={backgroundStyle}>
      <div
        style={enterBar}
        onClick={this.goIntoBar.bind(this) }></div>
        <DialogBox/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default Stairway
