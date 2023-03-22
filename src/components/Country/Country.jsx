import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country?.name.common)

    // const {area} = props.country
    return (
        <div className='country'>
            

            <h2>Country Name: {props.country?.name.common}</h2>
            <p>Population: {props.country?.population}</p>
            <p><small>Region: {props.country?.region}</small></p>
            <p>Area: {props.country?.area}</p>

        </div>
    );
};

export default Country;