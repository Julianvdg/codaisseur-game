import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "bar", content: "Maybe just a quick break before coding" },
    { kind: "office", content: "He took a face from the ancient gallery... and he walked on down the hall!" },
    { kind: "angela", content: "Get advice from Angela" },
    { kind: "steffi", content: "Get advice from Stefano" },
    { kind: "stefanoadvice", content: "Try to practice the content before you enter the course" },
    { kind: "angelaadvice", content: "Keep calm and you will get there" },
]

class Hallway extends Component {
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
  goIntoOffice(){this.props.changeStage(6)}

  // Dialog actions
  dialogBar(){this.messageSelector("bar")}
  dialogOffice(){this.messageSelector("office")}
  dialogSteffi(){this.messageSelector("steffi")}
  dialogAngela(){this.messageSelector("angela")}
  stefanoAdvice(){this.messageSelector("stefanoadvice")}
  angelaAdvice(){this.messageSelector("angelaadvice")}

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
          onMouseEnter={this.dialogBar.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
        </div>

        <div
          style={office}
          onClick={this.goIntoOffice.bind(this) }
          onMouseEnter={this.dialogOffice.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          ></div>

        <div
          style={angela}
          onClick={this.angelaAdvice.bind(this) }
          onMouseEnter={this.dialogAngela.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          ></div>

        <div
          style={steffi}
          onClick={this.stefanoAdvice.bind(this) }
          onMouseEnter={this.dialogSteffi.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          ></div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Hallway)

// Styles

let backgroundStyle = {
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473497410/hallway_wobnt7.jpg")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',
};

// Hitboxes


let enterBar = {
  height: '150px',
  width: '800px',
  position: 'absolute',
  right: '40px',
  bottom: '0px',
  cursor: 'pointer',

}

let office = {
  height: '280px',
  width: '340px',
  position: 'absolute',
  left: '390px',
  bottom: '300px',

}

let angela = {
  height: '200px',
  width: '150px',
  position: 'absolute',
  left: '100px',
  bottom: '150px',

}

let steffi = {
  height: '200px',
  width: '150px',
  position: 'absolute',
  left: '250px',
  bottom: '150px',

}
