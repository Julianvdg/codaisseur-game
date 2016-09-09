import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const style = {
    box: {
      width: '70%',
      height: '15%',
      backgroundColor: 'black',
      position: 'absolute',
      left: '15%',
      top: '85%',
      zIndex: '1',
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

const mapStateToProps = (state) => {
  return {
    message: state.dialogBox
  }
}


export default connect(mapStateToProps, {})(DialogBox)
