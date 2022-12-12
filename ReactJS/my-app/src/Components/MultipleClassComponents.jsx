
import { Component } from "react";

export default class MainClassComponent extends Component{
    render(){
        return <h2>Hello from Main Class Component</h2>
    }
}

export class ChildClassComponent extends Component{
    render(){
        return <h3>Hello from Child Class Component</h3>
    }
}

export class SiblingChildClassComp extends Component{
    render (){
        return <h4>Hello From SiblingChildClassComp Component</h4>
    }
}