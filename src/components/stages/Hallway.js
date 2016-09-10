import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "bar", content: "Maybe just a quick break before coding" },
    { kind: "office", content: "He took a face from the ancient gallery... and he walked on down the hall!" },
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
  height: '150px',
  width: '800px',
  position: 'absolute',
  right: '40px',
  bottom: '20px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let office = {
  height: '180px',
  width: '340px',
  position: 'absolute',
  left: '270px',
  bottom: '400px',
  backgroundColor: 'red'
}
