import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Bar extends Component {



  render() {

    let backgroundStyle = {
      backgroundImage: 'url("http://res.cloudinary.com/juvdg/image/upload/v1473412718/bar_mkrl4k.jpg")',
      width: '1200px',
      height: '800px',
    };

    return(
      <div style={backgroundStyle}>
        <h1> Bar Component </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}


export default Bar
