import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import DialogBox from '../../components/DialogBox'
import mondy from '../../actions/mondy'

class Entrance extends Component {

  enterWeWork(){
    const stageReference = 1
    this.props.changeStage(stageReference)
  }

  noKey(){
    this.props.mondy()
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
    let enter = {
      height: '495px',
      width: '285px',
      position: 'absolute',
      left: '250px',
      bottom: '1px',
      cursor: 'pointer',
      backgroundColor: 'red'
    }

    return(
      <div style={backgroundStyle}>
      <div style={enter} onClick={this.props.isMondyThere ? this.enterWeWork.bind(this) : this.noKey.bind(this)}></div>
        <DialogBox/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isMondyThere: state.mondy
  }
}


export default connect(mapStateToProps, { mondy  })(Entrance)
