import React, { Component } from 'react';
import { dragDrop } from 'drag-drop'

const styles1 = {
  images: {
     position: 'relative',
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

export default class InventoryItem extends Component {


    dragstart_handler(ev) {
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
          //  if (ev.target.id.startsWith("inventory") && this.props.inventory.indexOf(data) == -1 ) {

       }
  render() {
    return (
      <div style={styles1.item}>
      <img id={this.props.id} style={styles1.images} src={this.props.src} draggable="true" onDragStart={this.dragstart_handler.bind(this)}/>
      </div>
    )
  }
}
