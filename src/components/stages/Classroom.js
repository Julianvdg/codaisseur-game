import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "macbook", content: "Oh my zsh! Everyone has already started the assignment! Maybe I should too?" },
    { kind: "jorge", content: "Get advice from Jorge" },
    { kind: "matthijs", content: "Get advice from Matthijs" },
    { kind: "mark", content: "Get advice from Mark" },
    { kind: "office", content: "I think I might have some questions" },
    { kind: "markadvice", content: "Don't panic during this rollercoaster ride" },
    { kind: "jorgeadvice", content: "Je pieken en dalen; probeer er niet in te verdwalen" },
    { kind: "matthijsadvice", content: "Go with the flow" },
]


class Classroom extends Component {
  render() {
    return(
      <div style={backgroundStyle}>
        {this.renderHitBoxes()}
        <DialogBox/>
      </div>
    )
  }

  // Navigation
  goIntoOffice(){this.props.changeStage(6)}
  getBehindMacbook(){this.props.changeStage(8)}

  // Dialog actions
  dialogMacBook(){this.messageSelector("macbook")}
  dialogJorge(){this.messageSelector("jorge")}
  dialogMatthijs(){this.messageSelector("matthijs")}
  dialogMark(){this.messageSelector("mark")}
  dialogOffice(){this.messageSelector("office")}
  jorgeAdvice(){this.messageSelector("jorgeadvice")}
  markAdvice(){this.messageSelector("markadvice")}
  matthijsAdvice(){this.messageSelector("matthijsadvice")}


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
          style={getBehindMacBook}
          onClick={this.getBehindMacbook.bind(this) }
          onMouseEnter={this.dialogMacBook.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
        </div>

        <div
          style={jorge}
          onMouseEnter={this.dialogJorge.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.jorgeAdvice.bind(this) }
          ></div>

        <div
          style={matthijs}
          onMouseEnter={this.dialogMatthijs.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.matthijsAdvice.bind(this) }
          ></div>

        <div
          style={mark}
          onMouseEnter={this.dialogMark.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.markAdvice.bind(this)}
          ></div>


        <div
          style={office}
          onMouseEnter={this.dialogOffice.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goIntoOffice.bind(this)}
          ></div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Classroom)

// Styles

let backgroundStyle = {
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473497410/classroom_xkj1zh.jpg")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',
};

// Hitboxes

let getBehindMacBook = {
  height: '250px',
  width: '400px',
  position: 'absolute',
  right: '200px',
  bottom: '80px',
  cursor: 'pointer',

}


let jorge = {
  height: '270px',
  width: '160px',
  position: 'absolute',
  left: '100px',
  bottom: '170px',
  cursor: 'pointer',

}

let matthijs = {
  height: '140px',
  width: '160px',
  position: 'absolute',
  left: '280px',
  bottom: '340px',
  cursor: 'pointer',

}

let mark = {
  height: '300px',
  width: '120px',
  position: 'absolute',
  left: '680px',
  bottom: '140px',
  cursor: 'pointer',

}


let office = {
  height: '100px',
  width: '800px',
  position: 'absolute',
  left: '50px',
  bottom: '480px',

}
