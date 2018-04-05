import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Color from './Color';


class Game extends Component {
    constructor(props) {
        super(props);
        const colors = generateRandomColors(6);
        const winnerColor = pickRandomColor(colors);

        this.state = {
            colors: colors,
            winnerColor: winnerColor,
            over: false,
            n: 6,
            message: '',
            addClass: false
        };

        this.onClickHandler = this.onClickHandler.bind(this);
        this.startNewGame = this.startNewGame.bind(this);
        this.changeDificulty = this.changeDificulty.bind(this);
    }

    onClickHandler(e, color) {

        if(color === this.state.winnerColor) {
            console.log('WINNER');
            this.setState({
                over: true,
                message: 'You Win!'
            });
        } else {
            const newColors = this.state.colors;
            for(let i = 0; i < newColors.length; i++) {
                if(newColors[i] === color) {
                    newColors[i] = '#232323';
                }
            }
            this.setState({
                colors: newColors,
                message: "Try again!"
            })
        }
    }
    startNewGame(){
        const newColors = generateRandomColors(this.state.n);
        const newWinnerColor = pickRandomColor(newColors);

        this.setState({
            colors: newColors,
            winnerColor: newWinnerColor,
            over: false,
            message: ""
        });
    }

    changeDificulty(number){
        this.setState({
            n: number
        }, this.startNewGame)
    }


    render() {

        console.log("class name=", this.state.addClass);
        return (
            <div>
                <Header
                    winnerColor={this.state.winnerColor}
                    over={this.state.over}
                />
                <Menu
                    message={this.state.message}
                    onClickReset={this.startNewGame}
                    dificultyHandler={this.changeDificulty}

                />
                <div id="container">
                    {
                        this.state.colors.map((eachColor, index) => {

                            return(
                                <Color
                                    key={index}
                                    color={this.state.over ? this.state.winnerColor : eachColor}
                                    onClick={this.onClickHandler}
                                />
                            );
                        })
                    }
                </div>
            </div>
        )
    };
}

// pick a random color from colors
function pickRandomColor(colors) {
    let pickColor = Math.floor(Math.random() * colors.length);
    return colors[pickColor];
}

// get an array of random colors
function generateRandomColors(n) {
    let colors = [];
    for(let i = 0; i < n; i++) {
        colors.push(randomColor());
    }
    return colors;
}


//generate a random color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return (`rgb(${r},${g},${b})`);
}


export default Game;