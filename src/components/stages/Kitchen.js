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
    { kind: "fruitwater", content: "It's fresh, fresh; exciting" },
    { kind: "water", content: "Water (H2O) is a polar inorganic compound that is at room temperature a tasteless and odorless liquid" },
]

class Kitchen extends Component {
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
  goDownStairs(){this.props.changeStage(2)}

  // Dialog actions
  dialogBar(){this.messageSelector("bar")}
  dialogStairs(){this.messageSelector("stairs")}
  dialogCoffee(){this.messageSelector("coffee")}
  dialogWater(){this.messageSelector("water")}
  dialogFruitWater(){this.messageSelector("fruitwater")}
  dialogBeer(){this.messageSelector("beer")}

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
          onMouseEnter={this.dialogStairs.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }>
          </div>

        <div
          style={water}
          onMouseEnter={this.dialogWater.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.getWater.bind(this)}
          ></div>

        <div
          style={coffee}
          onMouseEnter={this.dialogCoffee.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.getCoffee.bind(this)}
          ></div>

        <div
          style={letsGetSomeBeers}
          onMouseEnter={this.dialogBeer.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.getSomeBeers.bind(this)}
          ></div>

        <div
          style={fruitWater}
          onMouseEnter={this.dialogFruitWater.bind(this) }
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
  backgroundColor: 'red'
}


let downStairs = {
  height: '195px',
  width: '85px',
  position: 'absolute',
  left: '350px',
  bottom: '170px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let water = {
  height: '150px',
  width: '100px',
  position: 'absolute',
  left: '700px',
  bottom: '140px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let coffee = {
  height: '540px',
  width: '80px',
  position: 'absolute',
  left: '800px',
  bottom: '20px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let letsGetSomeBeers = {
  height: '540px',
  width: '80px',
  position: 'absolute',
  left: '0px',
  bottom: '20px',
  cursor: 'pointer',
  backgroundColor: 'red'
}

let fruitWater = {
  height: '140px',
  width: '220px',
  position: 'absolute',
  left: '330px',
  bottom: '400px',
  backgroundColor: 'red'
}
