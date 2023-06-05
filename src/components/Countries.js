import React, {useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Country from "./Country";


import "../styles/Countries.css";

function Countries(){
    const [countries, setCountries] = useState([]);
    // если список стран пустой, то получим его
    if(!countries.length){
        axios.get("https://restcountries.com/v2/all").then(res => {
            console.log("res:",res);
            // получим страны и поместим его в state
            setCountries(res.data);
        });
    }

    return(
        <Table striped bordered hover className={"countries"}>
            <thead><tr><th>Name</th><th>Capital</th></tr><th>Action</th></thead>
            <tbody>
                {countries.map(country => <Country key={country.alpha3Code} country={country}/>)}
            </tbody>
        </Table>
    )
}

export default Countries;