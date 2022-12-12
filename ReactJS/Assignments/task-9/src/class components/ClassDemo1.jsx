import { Component } from "react";
import ClassDemo10 from "./ClassDemo10";
import ClassDemo2 from "./ClassDemo2";
import ClassDemo3 from "./ClassDemo3";
import ClassDemo4 from "./ClassDemo4";
import ClassDemo5 from "./ClassDemo5";
import ClassDemo6 from "./ClassDemo6";
import ClassDemo7 from "./ClassDemo7";
import ClassDemo8 from "./ClassDemo8";
import ClassDemo9 from "./ClassDemo9";

class ClassDemo1 extends Component {
    render (){
        return <div>
            <h3> Class Demo1</h3>
            <ClassDemo2/>
            <ClassDemo3/>
            <ClassDemo4/>
            <ClassDemo5/>
            <ClassDemo6/>
            <ClassDemo7/>
            <ClassDemo8/>
            <ClassDemo9/>
            <ClassDemo10/>
        </div>
    }
}

export default ClassDemo1;