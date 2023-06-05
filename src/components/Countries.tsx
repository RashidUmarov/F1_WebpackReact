import * as React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Country from "./Country";

import "../styles/Countries.css";

function Countries(){
    const [countries, setCountries] = React.useState([]);

    type CurrencyType = {
        code: string,
        name: string,
        symbol: string,
    }

    type CountryType={
        name: string
        capital: string
        alpha3Code: string
        borders: Array<string>
        currencies: Array<CurrencyType>
    }

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
            <thead><tr><th>Name</th><th>Capital</th><th>Action</th></tr></thead>
            <tbody>
                {countries.map((country:CountryType) => country.capital ? <Country key={country.alpha3Code} country={country}
                name={country.name}
                capital={country.capital}
                />: <Country key={country.alpha3Code} country={country}
                name={country.name}/>)}
            </tbody>
        </Table>
    )
}

export default Countries;