import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPersonAction } from '../Store/Actions';
import PersonsTable from './PersonsTable';

class Person extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            lname: "",
            email: "",
        }
    }
    handleChange = (e) => {
        let newUser = { ...this.state };
        newUser[e.target.name] = e.target.value;
        this.setState(newUser);
    };

    addPerson = () => {
        this.props.addPerson(this.state);// from Where it is Coming ?
        this.clearPersonForm()
    };

    clearPersonForm = () => {
        this.setState({
            fname: "",
            lname: "",
            email: "",
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <form>
                            <label> First Name :</label>
                            <input type="text" name="fname" value={this.state.fname} onChange={(e) => this.handleChange(e)} /><br />
                            <label> Last Name :</label>
                            <input type="text" name="lname" value={this.state.lname} onChange={(e) => this.handleChange(e)} /> <br />
                            <label> Email :</label>
                            <input type="text" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} /> <br />
                            <button type="button" onClick={() => { this.addPerson() }} className="btn btn-primary"> Add User</button>
                        </form>
                    </div>
                    <div className="col-8">
                        <PersonsTable />
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        allPersons: state.persons
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPerson: (person) => dispatch(addPersonAction(person))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)