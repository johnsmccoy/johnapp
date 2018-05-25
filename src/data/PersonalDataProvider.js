import React, {Component} from "react"

export const MyContext = React.createContext()

export class MyProvider extends Component {
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
            breed: "German Shepherd"
        }
    }

    render () {
        return (
            <MyContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

