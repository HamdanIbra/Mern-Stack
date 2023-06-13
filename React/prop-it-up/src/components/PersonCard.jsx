
import React, { Component ,useState} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age:props.age
        };
    }
    render() {
        return (
            <div>
                <div>{this.props.firstName}, {this.props.lastName}</div>
                <div>Age: {this.state.age}</div>
                <div>Hair Color : {this.props.color} </div>
                <div><button onClick={(e)=>this.setState({age:this.state.age+1})}>Birthday button for {this.props.firstName} {this.props.lastName}</button></div>
            </div>
        );
    }
}
export default PersonCard
