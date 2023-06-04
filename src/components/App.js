import React, { Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import "../styles/App.css";


function App(){
    const buttonName="Some button again";
        return (
        <Fragment>
            <Header buttonName={buttonName}/>
            <Main/>
        </Fragment>
    );
}


//const buttonName="Some button again";
//class App extends Component{
//
//    render(){
//        return (
//            <React.Fragment>
//                <Header buttonName={buttonName}/>
//                <Main/>
//            </React.Fragment>
//        );
//    }
//}

export default App;