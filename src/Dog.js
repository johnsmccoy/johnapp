import React, { Component } from 'react';



class Princess extends Component {
    render() {
        return (
            <div>
                <h3>My Pet</h3>
                <div>Name: {this.props.name}</div>
                <div>Breed: {this.props.breed}</div>
            </div>
        );
    }
  }

export default Princess