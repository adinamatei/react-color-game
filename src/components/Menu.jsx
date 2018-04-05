import React, {Component} from "react";

class  Menu extends Component {
    render(){

        return (
            <div id='menu'>
                <button
                    id='resetBtn'
                    onClick={(e) => {this.props.onClickReset()}}
                >
                    New Game
                </button>

                <span id='message'>{this.props.message}</span>

                <button
                    id='easyBtn'
                    onClick={(e) => {
                        this.props.dificultyHandler(3);

                    }}
                >
                    Easy
                </button>

                <button
                    id='hardBtn'
                    onClick={(e) => {
                        this.props.dificultyHandler(6);

                    }}
                >
                    Hard
                </button>
            </div>
        )
    }
}

export default Menu;