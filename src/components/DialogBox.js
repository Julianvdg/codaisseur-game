import React, { Component, PropTypes } from 'react'


const style = {
    box: {
      width: '90vw',
      height: '10vh',
      backgroundColor: 'black',
      margin: '0 auto',
    },
    text: {
      color: 'white',
      fontSize: '14px',
      display: 'inline-block',
      position: 'relative',
      bottom: '5px',

    },
    conslimage: {
      marginLeft: '10px',
      marginTop: '5px',
    },
}

class DialogBox extends Component {


  render() {
    return (
      <div style={style.box}>

        <img src={'http://res.cloudinary.com/ckreeftmeijer/image/upload/v1473413269/console_vdbqjr.png'}
             alt="console"
             style={style.conslimage}/>
        <p style={style.text}>
            &nbsp;
            &#9612;{this.props.message}
        </p>

      </div>
    )
  }
}

export default DialogBox
