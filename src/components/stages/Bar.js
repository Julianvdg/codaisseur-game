import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'
import Sound from 'react-sound'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "lift", content: "Maybe I'll take the elevator down.." },
    { kind: "game", content: "All work and no play makes Jack a dull boy.. Let's play a game!" },
    { kind: "cacti", content: "Cacti.. the plant of choice for lazy people" },
    { kind: "grabcacti", content: "Ouch!! What was I thinking!?" },
    { kind: "hallway", content: "Better head towards the classroom" },
    { kind: "kitchen", content: "Phew, I could use a drink!" },
    { kind: "ceiling", content: "Glass ceilings are so 2015... concrete ceilings are what is hip!" },
    { kind: "bas", content: "Ask Bas for advice" },
    { kind: "basadvice", content: "Give Compliments!" },
    { kind: "stairs", content: "Let's head back to the stairs" },
]


class Bar extends Component {
  render() {
    return(
      <div style={backgroundStyle}>
        {this.renderHitBoxes()}
        <DialogBox/>
        <Sound
           url="http://k003.kiwi6.com/hotlink/1ctfwaq00r/Kitchen.mp3"
           playStatus={Sound.status.PLAYING}
           playFromPosition={300 /* in milliseconds */}
           onLoading={this.handleSongLoading}
           onPlaying={this.handleSongPlaying}
           onFinishedPlaying={this.handleSongFinishedPlaying} />
      </div>
    )
  }

  // Navigation
  goDownToEntrance(){ this.props.changeStage(1) }
  goIntoHallway(){ this.props.changeStage(5) }
  goIntoKitchen(){ this.props.changeStage(4) }
  goToArcade(){this.props.changeStage(9)}
  goIntoStairs(){this.props.changeStage(2)}

  // Dialog actions
  dialogLift(){this.messageSelector("lift")}
  dialogGame(){this.messageSelector("game")}
  dialogCacti(){ this.messageSelector("cacti")}
  dialogGrabCacti(){ this.messageSelector("grabcacti")}
  dialogHallway(){ this.messageSelector("hallway")}
  dialogKitchen(){ this.messageSelector("kitchen")}
  dialogCeiling(){ this.messageSelector("ceiling")}
  dialogBas(){ this.messageSelector("bas")}
  dialogStairs(){ this.messageSelector("stairs")}
  basAdvice(){ this.messageSelector("basadvice")}

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
          style={useLift}
          onMouseEnter={this.dialogLift.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goDownToEntrance.bind(this) }
          ></div>

        <div
          style={playGame}
          onMouseEnter={this.dialogGame.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goToArcade.bind(this) }
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
          onClick={this.goIntoHallway.bind(this)}
          ></div>

        <div
          style={kitchen}
          onMouseEnter={this.dialogKitchen.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goIntoKitchen.bind(this)}
          ></div>

        <div
          style={ceiling}
          onMouseEnter={this.dialogCeiling.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          ></div>
          <div
            style={stairs}
            onMouseEnter={this.dialogStairs.bind(this) }
            onMouseLeave={this.emptyDialogBox.bind(this) }
            onClick={this.goIntoStairs.bind(this)}
            ></div>

          <img
            style={basStyle}
            src={'http://res.cloudinary.com/juvdg/image/upload/v1473520323/baskortebeentjes_ldcopb.png'}
            onMouseEnter={this.dialogBas.bind(this) }
            onMouseLeave={this.emptyDialogBox.bind(this) }
            onClick={this.basAdvice.bind(this)}
          />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Bar)


// Styles

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

  zIndex: '2'
}

let stairs = {
  height: '195px',
  width: '85px',
  position: 'absolute',
  left: '220px',
  bottom: '170px',
  cursor: 'pointer',
  zIndex: '2'
}

let cacti = {
  height: '55px',
  width: '55px',
  position: 'absolute',
  left: '160px',
  bottom: '125px',
  cursor: 'pointer',

  zIndex: '2'
}

let playGame = {
  height: '150px',
  width: '100px',
  position: 'absolute',
  left: '700px',
  bottom: '140px',
  cursor: 'pointer',

  zIndex: '2'
}

let hallway = {
  height: '540px',
  width: '80px',
  position: 'absolute',
  left: '800px',
  bottom: '20px',
  cursor: 'pointer',

  zIndex: '2'
}

let kitchen = {
  height: '540px',
  width: '80px',
  position: 'absolute',
  left: '0px',
  bottom: '20px',
  cursor: 'pointer',

  zIndex: '2'
}

let ceiling = {
  height: '170px',
  width: '690px',
  position: 'absolute',
  left: '90px',
  bottom: '400px',

  zIndex: '2'
}

let basStyle = {
  position: 'absolute',
  left: '360px',
  bottom: '0px',
  zIndex: '1'
}
