import { Component } from "react";

export class MainClassComp extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "Naveen Kumar",
            person: {
                fname: "Sam",
                lname: "Kumar",
                email: "SamKumar@gmail.com",
                city: "Bangalore",
                state: "Karnataka"
            },
            users: ["Kiran", "Arun", "Balaji", "Ramehs", "Bala", "Rama"]
        }
    }

    // JSX supports HTML intellijence
    render() {
        return <div>
            <h2>Welcome to {this.state.fullName}</h2>
            <hr />
            
            <ul>
                {/* <li>{this.state.users[0]}</li>
                <li>{this.state.users[1]}</li>
                <li>{this.state.users[2]}</li> */}
                {this.state.users.map((value) => {
                    return <li>{value}</li>
                })}
            </ul>
            <hr />
            <ul>
                {Object.values(this.state.person).map((val) => {
                    return <li>{val}</li>
                })}
                {/* <li>{this.state.person.fname}</li>
                <li>{this.state.person.lname}</li>
                <li>{this.state.person.email}</li> */}
            </ul>
        </div>
    }
}