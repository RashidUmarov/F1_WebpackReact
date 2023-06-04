import React, { Component } from "react";
import "../styles/Header.css";

let buttonName="Some button";

const handleClick=() => {
    console.log('hello');
}

class Header extends Component{
    render(){
        return(
            <header> This header
                <button className="some-button" onClick={ handleClick }> { buttonName } </button>
            </header>
        )
    }
}

export default Header;