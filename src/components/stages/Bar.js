import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

class Bar extends Component {

  goDown(){ this.props.changeStage(0) }
  goHallway(){this.props.changeStage(0) }

  dialogLift(){ this.props.messageDialogBox("Maybe I'll take the elevator down..") }
  dialogGame(){ this.props.messageDialogBox("All work and no play makes Jack a dull boy.. Let's play a game!" ) }
  dialogCacti(){ this.props.messageDialogBox("Cacti.. the plant of choice for lazy people") }
  dialogGrabCacti(){ this.props.messageDialogBox("Ouch!! What was I thinking!?") }
  dialogHallway(){ this.props.messageDialogBox("Better head towards the classroom") }
  dialogCeiling(){ this.props.messageDialogBox("Glass ceilings are so 2015... concrete ceilings are what is hip!") }
  emptyDialogBox(){this.props.emptyDialogBox()}

  render() {

    return(
      <div style={backgroundStyle}>
        <div
          style={useLift}
          onMouseEnter={this.dialogLift.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goDown.bind(this) }
          ></div>

        <div
          style={playGame}
          onMouseEnter={this.dialogGame.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          ></div>

        <div
          style={cacti}
          onMouseEnter={this.dialogCacti.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.dialogGrabCacti.bind(this)}
          ></div>

        <div
          style={hallway}
          onMouseEnter={this.dialogHallway.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goHallway.bind(this)}
          ></div>

        <div
          style={ceiling}
          onMouseEnter={this.dialogCeiling.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
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


let backgroundStyle = {
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473426554/bar_b2hsc1.jpg")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',

};

// Hitboxes

let useLift = {
  height: '195px',
  width: '85px',
  position: 'absolute',
  left: '350px',
  bottom: '170px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let cacti = {
  height: '55px',
  width: '55px',
  position: 'absolute',
  left: '160px',
  bottom: '125px',
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

let ceiling = {
  height: '170px',
  width: '730px',
  position: 'absolute',
  left: '50px',
  bottom: '400px',
  cursor: 'pointer',
  backgroundColor: 'red'
}
