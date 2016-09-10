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

]

class Office extends Component {

  // Navigation
  goIntoHallway(){this.props.changeStage(5)}
  goIntoClassroom(){this.props.changeStage(7)}

  // Dialog actions
  dialogTest(){this.messageSelector("test")}
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

  render() {

    return(
      <div style={backgroundStyle}>

        <div
          style={enterBar}
          onClick={this.goIntoClassroom.bind(this) }
          onMouseEnter={this.dialogTest.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
        </div>

        {this.props.isMiriamThere ? this.renderMiriam() : null }


        <DialogBox/>
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

let miriamStyle = {
  position: 'absolute',
  left: '250px',
  bottom: '1px',
}
