import React, { Component, PropTypes } from 'react'

class Iframe extends Component {

  iframe() {
    	return {
        	__html: this.props.iframe
        }
    }

    render() {
        return <div>
        	<div dangerouslySetInnerHTML={ this.iframe() } />
        </div>;
    }


}

export default Iframe
