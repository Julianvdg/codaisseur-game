import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import messageDialogBox from '../../actions/message-dialog-box'
import emptyDialogBox from '../../actions/empty-dialog-box'
import Iframe from '../../components/Iframe'




// Messages to be sent to the dialogbox from this component
const messages = [
    { kind: "test", content: "testing" },
]

class Arcade extends Component {


  constructor(){
    super();

    this.state = {
      iframe: ''
    }
  }



  render() {

    var iframe = '';

    return(
      <div style={backgroundStyle}>
        {this.renderHitBoxes()}
        <Iframe iframe={this.state.iframe}/>
        <DialogBox/>
      </div>
    )
  }

  // Navigation
  goIntoBar(){this.props.changeStage(3)}

  // Dialog actions
  dialogTest(){this.messageSelector("test")}

  // Standard dialog tools
  emptyDialogBox(){this.props.emptyDialogBox()}
  messageSelector(kind){
    const selectedMessage = messages.find((message) => message.kind == kind)
    this.props.messageDialogBox(selectedMessage.content)
  }

  // Play Games

  playGame1(){
    this.setState({
      iframe: '<iframe src="http://www.gamesdash.com/refer/embedg.php?gid=278" width="550" height="425" frameborder="0" scrolling="no" border="0"></iframe>'
    })
  }

  playGame2(){
    this.setState({
      iframe: '<iframe src="http://www.gamesdash.com/refer/embedg.php?gid=178" width="600" height="475" frameborder="0" scrolling="no" border="0"></iframe>'
    })
  }

  playGame3(){
    this.setState({
      iframe: '<iframe src="http://www.gamesdash.com/refer/embedg.php?gid=380" width="600" height="475" frameborder="0" scrolling="no" border="0"></iframe>'
    })
  }

  playGame4(){
    this.setState({
      iframe: '<iframe src="http://www.gamesdash.com/refer/embedg.php?gid=112" width="550" height="425" frameborder="0" scrolling="no" border="0"></iframe>'
    })
  }

  playGame5(){
    this.setState({
      iframe: '<iframe src="http://www.gamesdash.com/refer/embedg.php?gid=132" width="600" height="475" frameborder="0" scrolling="no" border="0"></iframe>'
    })
  }
  playGame6(){
    this.setState({
      iframe: '<iframe src="http://www.gamesdash.com/refer/embedg.php?gid=106" width="600" height="475" frameborder="0" scrolling="no" border="0"></iframe>'
    })
  }


  quitCurrentGame() {
    this.setState({
      iframe: ''
    })
  }


  renderHitBoxes(){
    return(
      <div>
        <div
          style={enterBar}
          onClick={this.goIntoBar.bind(this) }
          onMouseEnter={this.dialogTest.bind(this) }
          onMouseLeave={this.emptyDialogBox.bind(this) }> Back to bar
        </div>

        <div
          style={gamet1}
          // onMouseEnter={this.dialogLift.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.playGame1.bind(this) }
          ></div>

        <div
          style={gamet2}
          // onMouseEnter={this.dialogGame.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.playGame2.bind(this) }
          ></div>

        <div
          style={gamet3}
          // onMouseEnter={this.dialogCacti.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.dialogGrabCacti.bind(this)}
          onClick={this.playGame3.bind(this) }
          ></div>

        <div
          style={gameb1}
          // onMouseEnter={this.dialogHallway.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.goIntoHallway.bind(this)}
          onClick={this.playGame4.bind(this) }
          ></div>

        <div
          style={gameb2}
          // onMouseEnter={this.dialogKitchen.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          // onClick={this.goIntoKitchen.bind(this)}
          onClick={this.playGame5.bind(this) }
          ></div>

        <div
          style={gameb3}
          // onMouseEnter={this.dialogCeiling.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.playGame6.bind(this) }
          ></div>

        <div
          style={quitGame}
          // onMouseEnter={this.dialogCeiling.bind(this) }
          // onMouseLeave={this.emptyDialogBox.bind(this) }
          onClick={this.quitCurrentGame.bind(this)}
          >Quit Game</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default connect(mapStateToProps, { messageDialogBox, emptyDialogBox })(Arcade)

// Styles

let backgroundStyle = {
  backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473490835/arcade_ocnqp1.jpg")',
  width: '880px',
  height: '580px',
  margin: '0 auto',
  position: 'relative',
  borderRadius: '10px',
  border: '10px solid #d3d3d3',
};

// Hitboxes

let gamet1 = {
  height: '80px',
  width: '70px',
  position: 'absolute',
  left: '340px',
  top: '150px',
  cursor: 'pointer',
}


let gamet2 = {
  height: '80px',
  width: '70px',
  position: 'absolute',
  left: '420px',
  top: '150px',
  cursor: 'pointer',
}

let gamet3 = {
  height: '80px',
  width: '70px',
  position: 'absolute',
  left: '505px',
  top: '150px',
  cursor: 'pointer',
}

let gameb1 = {
  height: '80px',
  width: '70px',
  position: 'absolute',
  left: '340px',
  top: '250px',
  cursor: 'pointer',
}

let gameb2 = {
  height: '80px',
  width: '70px',
  position: 'absolute',
  left: '420px',
  top: '250px',
  cursor: 'pointer',
}

let gameb3 = {
  height: '80px',
  width: '70px',
  position: 'absolute',
  left: '505px',
  top: '250px',
  cursor: 'pointer',
}

let quitGame = {
  height: '50px',
  width: '80px',
  position: 'absolute',
  left: '50px',
  top: '20px',
  cursor: 'pointer',
  backgroundColor: 'blue'
}

let enterBar = {
  height: '50px',
  width: '80px',
  position: 'absolute',
  left: '50px',
  top: '80px',
  cursor: 'pointer',
  
}
