import React, {Component} from "react";

class Header extends Component {
    render(){
        let styleObj = {};
        if(this.props.over){
            styleObj.backgroundColor = this.props.winnerColor;
        }

        return (
            <div id='myHeader' style={styleObj}>
                <h3>The great</h3>
                <h1 id='colorDisplay'>{this.props.winnerColor}</h1>
                <h2>Color Game</h2>
            </div>
        )
    }
}

export default Header;