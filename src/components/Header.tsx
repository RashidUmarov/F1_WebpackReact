import * as React from "react";
import "../styles/Header.css";


function Header(props){
    //let buttonName="Some button";
    console.log('props:', props);
    let [count, serNewCount] = React.useState(0); // счетчик кликов по кнопке
    //  e  - event
    const handleClick=(e) => {
        serNewCount(count+1);
        console.log('hello', e.target);
    }

    return(
        <header> This header
            <button className="some-button" onClick={ handleClick }> {props.buttonName}, clicked {count} times </button>
        </header>
    )
}


//class Header extends Component{
//    render(){
//        return(
//            <header> This header
//                <button className="some-button" onClick={ handleClick }> { buttonName } </button>
//            </header>
//        )
//    }
//}

export default Header;