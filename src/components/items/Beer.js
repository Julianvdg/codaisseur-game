import React, { Component } from 'react';
import { dragDrop } from 'drag-drop'

export default class Beer extends Component {
  render() {
    return <img draggable="true" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQHgV6UATSJFjuy0rSTIBzqN6sK4Q8D8YS8wS1k9FbrhbKZaNXq"/>;
  }
}
