import React, { Component } from 'react';



class LexusLFA extends Component {
    render() {
        return (
            <div>
                <h3>My Favorite Car</h3>
                <div>{this.props.make}</div>
                <div>{this.props.model}</div>
            </div>
        );
    }
  }

export default LexusLFA