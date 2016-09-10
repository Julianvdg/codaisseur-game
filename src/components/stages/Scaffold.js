import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "test", content: "testing" },
]

class Scaffold extends Component {
  render() {
    return(
      <div style={backgroundStyle}>
        {this.renderHitBoxes()}
        <DialogBox/>
      </div>
    )
  }

  // Navigation
  goIntoBar(){this.props.changeStage(3)}

  // Dialog actions
  dialogTest(){this.messageSelector("test")}

  // Standard dialog tools
  emptyDialogBox(){this.props.emptyDialogBox()}
  messageSelector(kind){
    const selectedMessage = messages.find((message) => message.kind == kind)
    this.props.messageDialogBox(selectedMessage.content)
  }

  renderHitBoxes(){
    return(
      <div>
        <div
          style={enterBar}
          onClick={this.goIntoBar.bind(this) }
          onMouseEnter={this.dialogTest.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
        </div>

        <div
          style={useLift}
          // onMouseEnter={this.dialogLift.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.goDownToEntrance.bind(this) }
          ></div>

        <div
          style={playGame}
          // onMouseEnter={this.dialogGame.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          ></div>

        <div
          style={lollys}
          // onMouseEnter={this.dialogCacti.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.dialogGrabCacti.bind(this)}
          ></div>

        <div
          style={hallway}
          // onMouseEnter={this.dialogHallway.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.goIntoHallway.bind(this)}
          ></div>

        <div
          style={kitchen}
          // onMouseEnter={this.dialogKitchen.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.goIntoKitchen.bind(this)}
          ></div>

        <div
          style={ceiling}
          // onMouseEnter={this.dialogCeiling.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          ></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Scaffold)

// Styles

let backgroundStyle = {
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473429941/trappenhuis_fif5tk.jpg")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',
};

// Hitboxes

let enterBar = {
  height: '400px',
  width: '180px',
  position: 'absolute',
  right: '160px',
  bottom: '80px',
  cursor: 'pointer',
}


let useLift = {
  height: '195px',
  width: '85px',
  position: 'absolute',
  left: '350px',
  bottom: '170px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let lollys = {
  height: '55px',
  width: '55px',
  position: 'absolute',
  left: '160px',
  bottom: '300px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let playGame = {
  height: '150px',
  width: '100px',
  position: 'absolute',
  left: '700px',
  bottom: '140px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let hallway = {
  height: '540px',
  width: '80px',
  position: 'absolute',
  left: '800px',
  bottom: '20px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let kitchen = {
  height: '540px',
  width: '80px',
  position: 'absolute',
  left: '0px',
  bottom: '20px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let ceiling = {
  height: '170px',
  width: '690px',
  position: 'absolute',
  left: '90px',
  bottom: '400px',
  backgroundColor: 'red'
}
