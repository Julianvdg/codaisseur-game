import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "test", content: "in reception going to stairway" },
]

class Reception extends Component {
  render() {
    return(
      <div style={backgroundStyle}>
        {this.renderHitBoxes()}
        <DialogBox/>
      </div>
    )
  }

  // Navigation
  goToStairway(){this.props.changeStage(2)}

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
      <img  src={'http://res.cloudinary.com/juvdg/image/upload/v1473444538/arrow_zhtwoy.png'}
            style={arrowRight} onClick={this.goToStairway.bind(this) }
            onMouseEnter={this.dialogTest.bind(this) }
            onMouseLeave={this.emptyDialogBox.bind(this) }
            />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Reception)

// Styles

let backgroundStyle = {
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473443966/receptie_gq9fbj.jpg")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',
};

// Hitboxes

let arrowRight = {
  width: '120px',
  position: 'absolute',
  right: '70px',
  top: '200px',
  cursor: 'pointer'
}
