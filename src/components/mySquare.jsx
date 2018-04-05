import React, { Component } from 'react';

class Squares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numSquares: 6,
            colors: [],
            pickedColor: ''
        }
    }
}

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: this.generateRandomColor(6),
            pickColor: this.pickRandomColor()
        }
    }

    // pick a random color
    pickRandomColor(){
        let pickColor = Math.floor(Math.random() * this.state.colors.length);
        return this.state.colors[pickColor];
    }

    // generate color for more times
    generateRandomColor(n) {
        let colors = [];
        for(let i = 0; i < n; i++){
            this.state.colors.push(this.randomColor());
        }
        return colors;
    }

    // generate a random color
    randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return(`rgb(${r},${g},${b})`);
    }

}

export default Color;