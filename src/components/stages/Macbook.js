import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'
import StageItem from '../StageItem'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "assignment", content: 'Assignment: Create a new Rails project called "world-of-codaisseur" with a postgress database. Click on the screen to start.' },
    { kind: "goToClass", content: "Go to class" },
    { kind: "goedAntwoord", content: "Goed gedaan!" },
    { kind: "foutAntwoord", content: "Fout! Probeer opnieuw!" },
]

const style = {
    mondy: {
      position: 'absolute',
      left: '250px',
      bottom: '1px',
    },
    images: {
       position: 'absolute',
       top: '59%',
       left: '63%',
       height: '50px',
       marginTop: '-25px',
       marginLeft: '-25px',
       visibility: 'hidden',
       zIndex: '10'
    },
  }

class Macbook extends Component {


  componentDidMount() {
    {this.messageSelector("assignment")}
  }


  render() {
    return(
      <div style={backgroundStyle}>
        {this.renderHitBoxes()}
        <textarea style={inputStyle} id='answer'/>
        <button style={buttonStyle}
        onClick={this.sendAnswer.bind(this) }
        >Send answer</button>
        <StageItem id="diploma"
             style={style.images}
             src={'http://image.flaticon.com/icons/png/128/167/167748.png'}/>
        <img id="wouter" style={wouterStyle}/>
        <DialogBox/>
      </div>
    )
  }

  // Navigation
  goToClass(){this.props.changeStage(7)}

  // Dialog actions
  dialogTest(){this.messageSelector("goToClass")}

  // Standard dialog tools
  emptyDialogBox(){this.props.emptyDialogBox()}
  messageSelector(kind){
    const selectedMessage = messages.find((message) => message.kind == kind)
    this.props.messageDialogBox(selectedMessage.content)
  }

  sendAnswer(){
    let answer = document.getElementById("answer").value
    let lowercaseAnswer = answer.toLowerCase()
    if (lowercaseAnswer === "rails new world-of-codaisseur -d postgresql") {
      console.log("goed antwoord!")
      {this.messageSelector("goedAntwoord")}
      document.getElementById("wouter").src = "http://res.cloudinary.com/juvdg/image/upload/v1473514172/woutergoed_vbtqvk.png";
      this.showDiploma()
    } else {
      {this.messageSelector("foutAntwoord")}
      document.getElementById("wouter").src = "http://res.cloudinary.com/juvdg/image/upload/v1473513895/wouterfout_dplpxr.png";
      }
  }

  showDiploma() {
    document.getElementById("diploma").style.visibility= "visible"
  }


  renderHitBoxes(){
    return(
      <div
        style={goToClass}
        onClick={this.goToClass.bind(this) }
        onMouseEnter={this.dialogTest.bind(this) }
        onMouseLeave={this.emptyDialogBox.bind(this) }>
        Back to Class
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Macbook)

// Styles

let backgroundStyle = {
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473502430/macbook_vlq7h0.png")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',
};

// Hitboxes

let goToClass = {
  padding: '10px',
  position: 'absolute',
  right: '20px',
  top: '30px',
  cursor: 'pointer',
  backgroundColor: '#000',
  color: '#fff'
}

let inputStyle = {
  backgroundColor: '#000',
  border: 'none',
  marginTop: '80px',
  marginLeft: '250px',
  color: '#fff',
  resize: 'none',
  height: '180px',
  width: '300px',
  padding: '30px'
}

let buttonStyle = {
  width: '360px',
  height: '50px',
  position: 'absolute',
  top: '360px',
  right: '265px',
  backgroundColor: '#000',
  color: '#fff'
}

let wouterStyle = {
  position: 'absolute',
  right: '-20px',
  top: '210px',
  width: '500px',
  zIndex: '2',
}
