import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'

// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "bar", content: "Let's get away from this counter" },
    { kind: "stairs", content: "Down the stairs we go" },
    { kind: "coffee", content: "But first Coffee!" },
    { kind: "beer", content: "Friday!? Let's get some beer!" },
    { kind: "water", content: "Water (H2O) is a polar inorganic compound that is at room temperature a tasteless and odorless liquid" },
    { kind: "bram", content: "You know, I feel like some candy.." },
    { kind: "nienke", content: "I wish I could go outside on a day like this" },
]

const style = {
    coffeeimg: {
       position: 'absolute',
       top: '60%',
       left: '4%',
       height: '50px',
       marginTop: '-25px',
       marginLeft: '-25px',
       visibility: 'hidden',
       zIndex: '1',
    },
    waterimg: {
       position: 'absolute',
       top: '50%',
       left: '52%',
       height: '50px',
       marginTop: '-25px',
       marginLeft: '-25px',
       visibility: 'hidden',
       zIndex: '1',
    },
    beerimg: {
       position: 'absolute',
       top: '78%',
       left: '87%',
       height: '50px',
       marginTop: '-25px',
       marginLeft: '-25px',
       visibility: 'hidden',
       zIndex: '1',
    },
  }

class Kitchen extends Component {
  render() {
    return(
      <div style={backgroundStyle}>
      <img id="coffee"
           style={style.coffeeimg}
           src={'http://emojipedia-us.s3.amazonaws.com/cache/64/11/64118e55c629ae7eea058d3320796d1d.png'}
           draggable="true"
           onDragStart={this.dragstart_handler.bind(this)}/>
       <img id="water"
            style={style.waterimg}
            src={'http://www.glenrosebluegrass.com/images/CivicAlerts/5/_glass-of-water.png'}
            draggable="true"
            onDragStart={this.dragstart_handler.bind(this)}/>
        <img id="beer"
             style={style.beerimg}
             src={'https://www.emojibase.com/resources/img/emojis/apple/x1f37a.png.pagespeed.ic.BvtGLK8p4U.png'}
             draggable="true"
             onDragStart={this.dragstart_handler.bind(this)}/>
        {this.renderHitBoxes()}
        <DialogBox/>
      </div>
    )
  }

  // Navigation
  goIntoBar(){this.props.changeStage(3)}
  goDownStairs(){this.props.changeStage(2)}

  // Dialog actions
  dialogBar(){this.messageSelector("bar")}
  dialogStairs(){this.messageSelector("stairs")}
  dialogCoffee(){this.messageSelector("coffee")}
  dialogWater(){this.messageSelector("water")}
  dialogBeer(){this.messageSelector("beer")}
  dialogNienke(){this.messageSelector("nienke")}
  dialogBram(){this.messageSelector("bram")}

  // Standard dialog tools
  emptyDialogBox(){this.props.emptyDialogBox()}
  messageSelector(kind){
    const selectedMessage = messages.find((message) => message.kind == kind)
    this.props.messageDialogBox(selectedMessage.content)
  }

  getCoffee(){
    var id = document.getElementById("coffee")
    id.style.visibility = "visible";
  }

  getWater(){
    var id = document.getElementById("water")
    id.style.visibility = "visible";
  }

  getSomeBeers(){
    var id = document.getElementById("beer")
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
          style={enterBar}
          onClick={this.goIntoBar.bind(this) }
          onMouseEnter={this.dialogBar.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
        </div>

        <div
          style={downStairs}
          onClick={this.goDownStairs.bind(this) }
          onMouseEnter={this.dialogStairs.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
          </div>

        <div
          style={water}
          onMouseEnter={this.dialogWater.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.getWater}
          ></div>

        <div
          style={coffee}
          onMouseEnter={this.dialogCoffee.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.getCoffee}
          ></div>

        <div
          style={letsGetSomeBeers}
          onMouseEnter={this.dialogBeer.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.getSomeBeers}
          ></div>

        <div
          style={nienke}
          onMouseEnter={this.dialogNienke.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.getFruitWater.bind(this)}
          ></div>

        <div
          style={bram}
          onMouseEnter={this.dialogBram.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.getFruitWater.bind(this)}
          ></div>
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
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473495299/kitchen_mbylrv.jpg")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',
};

// Hitboxes

let enterBar = {
  height: '150px',
  width: '780px',
  position: 'absolute',
  right: '100px',
  bottom: '5px',
  cursor: 'pointer',
  // backgroundColor: 'red'
}


let downStairs = {
  height: '570px',
  width: '50px',
  position: 'absolute',
  left: '830px',
  bottom: '10px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let water = {
  height: '170px',
  width: '120px',
  position: 'absolute',
  left: '420px',
  bottom: '200px',
  cursor: 'pointer',
  // backgroundColor: 'red'
}

let coffee = {
  height: '230px',
  width: '170px',
  position: 'absolute',
  left: '5px',
  bottom: '170px',
  cursor: 'pointer',
  // backgroundColor: 'red'
}

let letsGetSomeBeers = {
  height: '190px',
  width: '100px',
  position: 'absolute',
  left: '700px',
  bottom: '170px',
  cursor: 'pointer',
  // backgroundColor: 'red'
}

let nienke = {
  height: '340px',
  width: '170px',
  position: 'absolute',
  left: '230px',
  bottom: '170px',
  backgroundColor: 'red'
}

let bram = {
  height: '130px',
  width: '120px',
  position: 'absolute',
  left: '710px',
  bottom: '370px',
  backgroundColor: 'red'
}
