import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

class Bar extends Component {


  goDown(){
    const stageReference = 0
    this.props.changeStage(stageReference)
  }

  messageDialogBox(){
    const message = "Message"
    this.props.messageDialogBox(message)
  }

  emptyDialogBox(){
    // setTimeout(
    //   () => { console.log('I do not leak!'); },
    //   500
    // )
    this.props.emptyDialogBox()
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
    }

    return(
      <div style={backgroundStyle}>
        <div
          style={useLift}
          onMouseEnter={this.messageDialogBox.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goDown.bind(this) }


          ></div>

        <DialogBox/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Bar)
