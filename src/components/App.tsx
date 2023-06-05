import * as React from "react";
import Header from "./Header";
import Main from "./Main";
import "../styles/App.css";


function App(){
    let buttonName="Some button again";
    //buttonName=10;
        return (
        <>
            <Header buttonName={buttonName}/>
            <Main/>
        </>
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