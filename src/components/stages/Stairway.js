import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'

class Stairway extends Component {



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


    console.log(this.props)
    return(
      <div style={backgroundStyle}>
        <DialogBox/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default Stairway
