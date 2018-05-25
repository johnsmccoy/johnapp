import React, { Component } from 'react';
import Home from './Home';
import Lexus from './Car';
import Princess from './Dog';


class JohnBio extends Component {

    state = {
        firstName: "John",
        lastName: "McCoy",
        occupation: "Student at NSS",
        address: {
            street: "507 Martingale Ct",
            city: "Brentwood",
            state: "TN"
        },
        fame: "Software Engineering Master",
        car: {
            make: "Lexus",
            model: "LFA"
        },
        pet: {
            species: "Dog",
            name: "Princess",
            breed: "Ovcharka"
        }
    }

    render() {
        return (
            <div>
                <h3>{this.state.firstName} {this.state.lastName}</h3>
                <h4>{this.state.occupation}</h4>
                <h5>{this.state.fame}</h5>
                <Home address={this.state.address} />
                <Lexus make={this.state.car.make} model={this.state.car.model} />
                <Princess name={this.state.pet.name} breed={this.state.pet.breed} />
            </div>
        );
    }
}

export default JohnBio;
