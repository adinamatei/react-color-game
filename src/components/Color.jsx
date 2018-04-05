import React, { Component } from 'react';

class Color extends Component {
    render() {
        const styleObj = {
            backgroundColor: this.props.color
        };
        return(
            <div
                className='square'
                style={styleObj}
                onClick={(e) => this.props.onClick(e, this.props.color)}
            />

        );
    }
}

export default Color;