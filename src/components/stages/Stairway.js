import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "bar", content: "The breakroom or a.k.a bar. Is it friday today?" },
    { kind: "downstairs", content: "Maybe I should go downstairs" },
    { kind: "upstairs", content: "Go to the recruiter" },
]


class Stairway extends Component {
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
  goDownStairs(){this.props.changeStage(1)}
  goToRecruiter(){this.props.changeStage(10)}

  // Dialog actions
  dialogBar(){this.messageSelector("bar")}
  dialogDownStairs(){this.messageSelector("downstairs")}
  dialogUpStairs(){this.messageSelector("upstairs")}


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
          style={downStairs}
          onClick={this.goDownStairs.bind(this) }
          onMouseEnter={this.dialogDownStairs.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
        </div>
        <div
          style={toRecruiter}
          onClick={this.goToRecruiter.bind(this) }
          onMouseEnter={this.dialogUpStairs.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Stairway)

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

let downStairs = {
  height: '200px',
  width: '500px',
  position: 'absolute',
  right: '400px',
  bottom: '20px',
  cursor: 'pointer',

}

let toRecruiter = {
  height: '200px',
  width: '500px',
  position: 'absolute',
  right: '400px',
  top: '20px',
  cursor: 'pointer',

}
