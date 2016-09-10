import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'
import miriam from '../../actions/miriam-people'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "test", content: "in office going to classroom" },
    { kind: "miriam", content: "Miriam placeholder" },
    { kind: "quiz", content: "This is the first question" },
    { kind: "classroom", content: "The classroom.. What a journey!" },
    { kind: "hallway", content: "I could use some refreshments" },

]

class Office extends Component {
  render() {
    return(
      <div style={backgroundStyle}>
        { this.renderHitBoxes()}
        { this.props.isMiriamThere ? this.renderMiriam() : null }
        <DialogBox/>
      </div>
    )
  }

  // Navigation
  goIntoHallway(){this.props.changeStage(5)}
  goIntoClassRoom(){this.props.changeStage(7)}

  // Dialog actions
  dialogTest(){this.messageSelector("test")}
  dialogHallway(){this.messageSelector("hallway")}
  dialogClassRoom(){this.messageSelector("classroom")}
  dialogMiriam(){this.messageSelector("miriam")}
  dialogQuiz(){this.messageSelector("quiz")}

  // Standard dialog tools
  emptyDialogBox(){this.props.emptyDialogBox()}
  messageSelector(kind){
    const selectedMessage = messages.find((message) => message.kind == kind)
    this.props.messageDialogBox(selectedMessage.content)
  }

  miriamsQuiz(){
    this.dialogQuiz()
  }

  componentDidMount(){
    this.props.miriam()
  }



  renderMiriam() {
    return (
        <img
          style={miriamStyle}
          src={'http://res.cloudinary.com/ckreeftmeijer/image/upload/v1473435057/mondy_480_izonfv.png'}
          onMouseEnter={this.dialogMiriam.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.miriamsQuiz.bind(this)}
        />
    )
  }

  renderHitBoxes() {
    return(
      <div>
        <div
          style={classRoom}
          onClick={this.goIntoClassRoom.bind(this) }
          onMouseEnter={this.dialogClassRoom.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
        </div>

        <div
          style={theZone}
          // onMouseEnter={this.dialogCacti.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.dialogGrabCacti.bind(this)}
          ></div>

        <div
          style={hallway}
          onMouseEnter={this.dialogHallway.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goIntoHallway.bind(this)}
          ></div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isMiriamThere: state.people.miriam
  }
}


export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox, miriam })(Office)



// Styles

let backgroundStyle = {
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473505813/office_ya9zeo.png")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',
};

// Hitboxes

let classRoom = {
  height: '580px',
  width: '120px',
  position: 'absolute',
  right: '0px',
  bottom: '0px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let theZone = {
  height: '55px',
  width: '55px',
  position: 'absolute',
  left: '160px',
  bottom: '300px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let hallway = {
  height: '580px',
  width: '80px',
  position: 'absolute',
  left: '0px',
  bottom: '0px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let miriamStyle = {
  position: 'absolute',
  left: '250px',
  bottom: '1px',
}
