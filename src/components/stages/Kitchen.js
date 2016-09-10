import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "test", content: "in kitchen going back to bar" },
]

class Kitchen extends Component {
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
      <div
        style={enterBar}
        onClick={this.goIntoBar.bind(this) }
        onMouseEnter={this.dialogTest.bind(this) }
        onMouseLeave={this.emptyDialogBox.bind(this) }>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Kitchen)

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