import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import mondy from '../../actions/mondy-people'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

const style = {
    mondy: {
      position: 'absolute',
      left: '250px',
      bottom: '1px',
    },
    images: {
       position: 'absolute',
       top: '62%',
       left: '30%',
       height: '50px',
       marginTop: '-25px',
       marginLeft: '-25px',
    },
  }

class Entrance extends Component {
  
  dialogFrontDoor(){ this.props.messageDialogBox("We work ... thank god it's monday, better hurry") }

  enterWeWork(){
    const { changeStage, emptyDialogBox } = this.props
    changeStage(1), emptyDialogBox()
  }

  noKey(){
    const { mondy, messageDialogBox } = this.props
    messageDialogBox("I swear I had my keycard just now.. ")
    setTimeout(() => {
    mondy(), messageDialogBox("Mondy: He there stupid. Did you forget your keycard again? Take this")
  }, 5000)
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


  render() {


    let backgroundStyle = {
      backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473430931/entrance_jhdm3t.jpg")',
      width: '880px',
      height: '580px',
      margin: '0 auto',
      position: 'relative',
      borderRadius: '10px',
      border: '10px solid #d3d3d3',
    };
    let frontDoor = {
      height: '495px',
      width: '285px',
      position: 'absolute',
      left: '250px',
      bottom: '1px',
      cursor: 'pointer',
      // backgroundColor: 'red'
    }

    return(
      <div style={backgroundStyle}>
      <div
        style={frontDoor}
        onClick={this.props.isMondyThere ? this.enterWeWork.bind(this) : this.noKey.bind(this)}
        onMouseEnter={this.dialogFrontDoor.bind(this) }>
      </div>

      {this.props.isMondyThere ?

          (<div>
              <img onClick={this.enterWeWork.bind(this)}
                   style={style.mondy}
                   src={'http://res.cloudinary.com/ckreeftmeijer/image/upload/v1473435057/mondy_480_izonfv.png'}/>

              <img id="keycard"
                   style={style.images}
                   src={'http://res.cloudinary.com/juvdg/image/upload/v1473432641/weworkpasje_gsrkzn.png'}
                   draggable="true"
                   onDragStart={this.dragstart_handler.bind(this)}/>
          </div>)

          : null}

        <DialogBox/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isMondyThere: state.people.mondy
  }
}


export default connect(mapStateToProps, { mondy, messageDialogBox, emptyDialogBox  })(Entrance)
