import React from 'react'
import { Component } from 'react';
import HOComponent from './HOComponent';

 class ClickCounter extends Component{
    render(){
        return (
            <div>
                <button onClick={this.props.handleIncrement}> Click</button>
                <h2>You Clicked {this.props.count} times !!</h2>
            </div>
        )
    }
 }


 export default HOComponent(ClickCounter)