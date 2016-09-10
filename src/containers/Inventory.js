import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import dragDrop from 'drag-drop'
import addItem from '../actions/add-item'
import InventoryItem from '../components/InventoryItem'
import StageItem from  '../components/StageItem'


const imageStyle = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   height: '30px',
   marginTop: '-15px',
   marginLeft: '-15px',
}
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


  renderItem(item, index) {
    return (
      <InventoryItem key={ index }
        {...item}
        />
      )
  }

  itemPlug(item) {
    var id = document.getElementById(item)
    const src = id.getAttribute('src');
    const newItem = Object.assign({}, { id: item, src: src})
    this.props.addItem(newItem)

  }

  dragstart_handler(ev) {
      console.log(ev.target)
      // Add the target element's id to the data transfer object
      ev.dataTransfer.setData("text/plain", ev.target.id);
     }

   allowDrop(ev) {
         ev.preventDefault();

        //  ev.dataTransfer.dropEffect = "none";

     }

   drop(ev) {
         ev.preventDefault();
         var data = ev.dataTransfer.getData("text");
         var id = document.getElementById(data)
         if (ev.target.id.startsWith("inventory")) {
           this.itemPlug(data)
          //  console.log(data)
          //     id.setAttribute('style', 'position:absolute;top:27%;left:27%;height:30px;marginTop:-15px;marginLeft:-15px')
          //     console.log(id.id)
         }
         return
     }



  render() {
    const { inventory } = this.props

    return (
      <div style={style.inventorybox}>
        <div id="inventory" style={style.tiles} onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>

          <div id="inventory1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>
            <img id="key1" style={style.images} src={'https://a2ua.com/key/key-012.jpg'} draggable="true" onDragStart={this.dragstart_handler.bind(this)}/>
           </div>
           {/* <div id="inventory2" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>
           <img id="keycard4"
                style={style.images}
                src={'http://res.cloudinary.com/juvdg/image/upload/v1473432641/weworkpasje_gsrkzn.png'}
                draggable="true"
                onDragStart={this.dragstart_handler.bind(this)}/>
           </div>  */}

           { inventory.map(this.renderItem.bind(this)) }

           {/* <div id="inventory3" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>

           </div>
           <div id="inventory4" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>

           </div>
           <div id="inventory5" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>

           </div>
           <div id="inventory6" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>

           </div>
           <div id="inventory7" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>

           </div>
           <div id="inventory8" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>

           </div>
           <div id="inventory9" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} style={style.item}>

           </div> */}

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
