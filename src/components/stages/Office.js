import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'
import miriam from '../../actions/miriam-people'
import InventoryItem from '../../components/InventoryItem'
import StageItem from  '../../components/StageItem'
import askQuestions from '../../actions/miriam-questions'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "test", content: "in office going to classroom" },
    { kind: "miriam", content: "Ask Miriam a question" },
    { kind: "quiz", content: "Miriam: If you don't know something just look at the documentation.. " },
    { kind: "classroom", content: "The classroom.. What a journey!" },
    { kind: "hallway", content: "I could use some refreshments" },
    { kind: "flower", content: "Miriam: I love getting flowers! If you're passionate about rails I'll answer your questions"},
    { kind: "answer", content: "Miriam: A rails app with postgres? try: rails new app-name -d postgresql " },
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
  dialogFlowerGift(){this.messageSelector("flower")}
  dialogquestion(){this.messageSelector("answer")}

  // Standard dialog tools
  emptyDialogBox(){this.props.emptyDialogBox()}
  messageSelector(kind){
    const selectedMessage = messages.find((message) => message.kind == kind)
    this.props.messageDialogBox(selectedMessage.content)
  }

  miriamsQuiz(){
    this.dialogQuiz()
  }

  askQuestions(){
    this.props.askQuestions()
  }

  componentDidMount(){
    this.props.miriam()
  }


    dragstart_handler(ev) {
        console.log("invent")
        // Add the target element's id to the data transfer object
        ev.dataTransfer.setData("text/plain", ev.target.id);
       }

     allowDrop(ev) {
           ev.preventDefault();
          //  var data = ev.dataTransfer.getData("text/html");
          //  const id = ev.target.getAttribute("draggable")
          //  console.log(data)
          //  if (ev.target.getAttribute("id") !== "keycard") ev.dataTransfer.dropEffect = "none"; // dropping is not allowed
          //  var data = ev.dataTransfer.getData("id,");
          //  if(data == "key1") ev.dataTransfer.dropEffect = "none";
          //  if(data !== "keycard") ev.dataTransfer.dropEffect = "none";
       }



     drop(ev) {
           ev.preventDefault();
           console.log(ev.target.id)
           var data = ev.dataTransfer.getData("text",);
          //  if (ev.target.id == "inventory") {
          //    this.props.addItem(data)
          //    ev.target.appendChild(document.getElementById(data));
          //    console.log(data)
          //  }
          if(data == "flowers") {
            // ev.dataTransfer.dropEffect = "none";
            this.dialogFlowerGift()
            this.askQuestions()
            }
         }



  renderMiriam() {
    return (
        <div id="miriam" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
          <div id="drop" >
            <img
              style={miriamStyle}
              src={'http://res.cloudinary.com/juvdg/image/upload/v1473501492/miriamt_s0zrf7.png'}
              onMouseEnter={this.props.askquestion ? this.dialogquestion.bind(this) : this.dialogMiriam.bind(this) }
              // onMouseLeave={this.emptyDialogBox.bind(this) }
              onClick={this.miriamsQuiz.bind(this)}
            />
          </div>
        </div>
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
    isMiriamThere: state.people.miriam,
    askquestion: state.people.askQuestions
  }
}


export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox, miriam, askQuestions })(Office)



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

}

let theZone = {
  height: '55px',
  width: '55px',
  position: 'absolute',
  left: '160px',
  bottom: '300px',
  cursor: 'pointer',

}

let hallway = {
  height: '580px',
  width: '80px',
  position: 'absolute',
  left: '0px',
  bottom: '0px',
  cursor: 'pointer',

}

let miriamStyle = {
  position: 'absolute',
  left: '250px',
  bottom: '1px',
}
