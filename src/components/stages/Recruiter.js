import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "test", content: "testing" },
    { kind: "diploma", content: "Congratulations!! You got the job" },
]

class Recruiter extends Component {
  render() {
    return(
      <div style={backgroundStyle}>
        {this.renderHitBoxes()}
        <DialogBox/>
      </div>
    )
  }
dialogDiploma(){this.messageSelector("diploma")}

goBack(){this.props.changeStage(2)}

  dragstart_handler(ev) {
      console.log("invent")
      // Add the target element's id to the data transfer object
      ev.dataTransfer.setData("text/plain", ev.target.id);
     }

   allowDrop(ev) {
         ev.preventDefault();
     }



   drop(ev) {
         ev.preventDefault();
         var data = ev.dataTransfer.getData("text");


         if(data == "diploma") {
           // ev.dataTransfer.dropEffect = "none";
           this.dialogDiploma()
           console.log("beer")
           }

       }





  // Standard dialog tools
  emptyDialogBox(){this.props.emptyDialogBox()}
  messageSelector(kind){
    const selectedMessage = messages.find((message) => message.kind == kind)
    this.props.messageDialogBox(selectedMessage.content)
  }

  renderHitBoxes(){
    return(

      <div>
        <div id="recruiter" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
            <div id="drop3" >
              <div>
              <img
                style={recruiter}
                src={'http://res.cloudinary.com/juvdg/image/upload/v1473518069/rembert_fwowwt.png'}
                // onMouseEnter={this.dialogMiriam.bind(this) }
                // onMouseLeave={this.emptyDialogBox.bind(this) }
                // onClick={this.miriamsQuiz.bind(this)}
              />
                ></div>
                <div
                  style={back}
                  // onMouseEnter={this.dialogCacti.bind(this) }
                  // onMouseLeave={this.emptyDialogBox.bind(this) }
                  onClick={this.goBack.bind(this)}
                  ></div>
            </div>
        </div>
    </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    inventory: state.inventory,
  }
}


export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Recruiter)

// Styles

let backgroundStyle = {
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473517764/recruiter_plkwhz.png")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',
};

// Hitboxes



let recruiter = {
  height: '255px',
  position: 'absolute',
  left: '300px',
  bottom: '70px',
  cursor: 'pointer',
}

let back = {
  height: '55px',
  width: '55px',
  position: 'absolute',
  left: '460px',
  bottom: '300px',
  cursor: 'pointer',
}
