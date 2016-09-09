import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import dragDrop from 'drag-drop'
import addItem from '../actions/add-item'



const style = {
    inventorybox: {
      marginTop: '10px',
      width: '880px',
      margin: '0 auto',
      height: '12vh',
      border: '10px solid #d3d3d3',
      borderRadius: '10px',
      backgroundColor: '#f5fafb'
    },
    tiles: {
      margin: '0 auto',
      marginLeft: '25px',
    },
    images: {
       position: 'absolute',
       top: '50%',
       left: '50%',
       height: '30px',
       marginTop: '-15px',
       marginLeft: '-15px',
    },
    item: {
      height: 60,
      width: 60,
      borderRadius: '50%',
      boxShadow: '0px 1px 10px grey',
      position: 'relative',
      marginTop: '12px',
      marginRight: '35px',
      display: 'inline-block',
      backgroundColor: 'white',
    },
}

class Inventory extends Component {

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
         }
         ev.target.appendChild(document.getElementById(data));
     }


  render() {
    return (
      <div style={style.inventorybox}>
        <div style={style.tiles}>
          <div id="inventory" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>
           </div>
           <div style={style.item}>
             <img src={'http://emojipedia-us.s3.amazonaws.com/cache/29/fa/29fa71a263beee5f4bee9dfbf59b501f.png'}
                  style={style.images}/>
           </div>
           <div style={style.item}>
             <img src={'http://res.cloudinary.com/juvdg/image/upload/v1473432641/weworkpasje_gsrkzn.png'}
                  style={style.images}/>
           </div>
           <div style={style.item}>
             <img src={'http://4.bp.blogspot.com/-YzFpA3jmvbU/TZzI9ixzRSI/AAAAAAAAMDM/5a8q46CvR4Y/s400/Question-Mark.png'}
                  style={style.images}/>
           </div>
           <div style={style.item}>
             <img src={'http://4.bp.blogspot.com/-YzFpA3jmvbU/TZzI9ixzRSI/AAAAAAAAMDM/5a8q46CvR4Y/s400/Question-Mark.png'}
                  style={style.images}/>
           </div>
           <div style={style.item}>
             <img src={'http://4.bp.blogspot.com/-YzFpA3jmvbU/TZzI9ixzRSI/AAAAAAAAMDM/5a8q46CvR4Y/s400/Question-Mark.png'}
                  style={style.images}/>
           </div>
           <div style={style.item}>
             <img src={'http://4.bp.blogspot.com/-YzFpA3jmvbU/TZzI9ixzRSI/AAAAAAAAMDM/5a8q46CvR4Y/s400/Question-Mark.png'}
                  style={style.images}/>
           </div>
           <div style={style.item}>
             <img src={'http://4.bp.blogspot.com/-YzFpA3jmvbU/TZzI9ixzRSI/AAAAAAAAMDM/5a8q46CvR4Y/s400/Question-Mark.png'}
                  style={style.images}/>
           </div>
           <div style={style.item}>
             <img src={'http://4.bp.blogspot.com/-YzFpA3jmvbU/TZzI9ixzRSI/AAAAAAAAMDM/5a8q46CvR4Y/s400/Question-Mark.png'}
                  style={style.images}/>
           </div>

        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    inventory: state.inventory
  }
}

export default connect(mapStateToProps, { addItem  })(Inventory)
