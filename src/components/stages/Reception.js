import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "outside", content: "It's such a nice day.. Time for some fresh air!" },
    { kind: "flowers", content: "Those flowers look really nice, should I steal one?" },
    { kind: "lollys", content: "Free lollipops! Oh my Zsh!" },
    { kind: "stairs", content: "Better head upstairs" },
]

const style = {
    images: {
       position: 'absolute',
       top: '44%',
       left: '21%',
       height: '50px',
       marginTop: '-25px',
       marginLeft: '-25px',
       visibility: 'hidden',
       zIndex: '1',
    },
  }

class Reception extends Component {
  render() {
    return(
      <div style={backgroundStyle}>
      <img id="lolly"
           style={style.images}
           src={'http://emojipedia-us.s3.amazonaws.com/cache/12/b1/12b1b8880776afc0a392fecec83058d0.png'}
           draggable="true"
           onDragStart={this.dragstart_handler.bind(this)}/>
        {this.renderHitBoxes()}
        <DialogBox/>
      </div>
    )
  }

  // Navigation
  goUpTheStairs(){this.props.changeStage(2)}
  goOutside(){this.props.changeStage(0)}

  // Dialog actions
  dialogTest(){this.messageSelector("test")}
  dialogOutside(){this.messageSelector("outside")}
  dialogStairs(){this.messageSelector("stairs")}
  dialogFlowers(){this.messageSelector("flowers")}
  dialogLollys(){this.messageSelector("lollys")}

  // Standard dialog tools
  emptyDialogBox(){this.props.emptyDialogBox()}
  messageSelector(kind){
    const selectedMessage = messages.find((message) => message.kind == kind)
    this.props.messageDialogBox(selectedMessage.content)
  }

  showImage(){
    var id = document.getElementById("lolly")
    id.style.visibility = "visible";
  }

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
         if (ev.target.id == "inventory") {
           this.props.addItem(data)
           ev.target.appendChild(document.getElementById(data));
           console.log(data)
         }
         ev.target.appendChild(document.getElementById(data));
       }



  renderHitBoxes(){
    return(
      <div>
        <div
          style={flowers}
          onMouseEnter={this.dialogFlowers.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.dialogGrabFlower.bind(this)}
          ></div>

        <div
          style={lollys}
          onMouseEnter={this.dialogLollys.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.showImage}
          ></div>

        <div
          style={stairs}
          onMouseEnter={this.dialogStairs.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goUpTheStairs.bind(this)}
          ></div>

        <div
          style={outside}
          onMouseEnter={this.dialogOutside.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.goOutside.bind(this)}
          ></div>

      </div>
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

let useLift = {
  height: '195px',
  width: '85px',
  position: 'absolute',
  left: '350px',
  bottom: '170px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let lollys = {
  height: '55px',
  width: '55px',
  position: 'absolute',
  left: '160px',
  bottom: '300px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let flowers = {
  height: '150px',
  width: '100px',
  position: 'absolute',
  left: '550px',
  bottom: '260px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let stairs = {
  height: '540px',
  width: '80px',
  position: 'absolute',
  left: '800px',
  bottom: '20px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let outside = {
  height: '540px',
  width: '80px',
  position: 'absolute',
  left: '0px',
  bottom: '20px',
  cursor: 'pointer',
  backgroundColor: 'red'
}
