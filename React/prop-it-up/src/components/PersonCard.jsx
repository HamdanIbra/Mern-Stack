
import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        return (
            <div>
                <div>{this.props.firstName}, {this.props.lastName}</div>
                <div>Age: {this.props.age}</div>
                <div>Hair Color : {this.props.color} </div>
            </div>
        );
    }
}
export default PersonCard
