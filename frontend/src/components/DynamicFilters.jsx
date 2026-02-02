import React from 'react'
import { useState } from 'react'
import "./DynamicFilters.css"

const DynamicFilters = () => {
    const countries=[
        {id:1,name:"USA"},
        {id:2,name:"Canada"},
        {id:3,name:"Australia"},
        {id:4,name:"Other"},
    ]

    const cities={        
        USA:[
            {id:1,name:"New York"},
            {id:2,name:"Los Angeles"},
            {id:3,name:"Chicago"},
        ],
        Canada:[{id:1,name:"Toronto"},{id:2,name:"Vancouver"}],
        Australia:[{id:1,name:"Sydney"},{id:2,name:"Melbourne"}],
    }

    const [country,setCountry]=useState("");
    const [city,setCity]=useState("");
    const [otherCountry,setOtherCountry]=useState('')
    
    // Get all cities from all countries
    const allCities = Object.values(cities).flat()
    
    // Get available cities based on selected country
    const availableCities = country && country !== "Other" ? cities[country] : allCities


    const handleCountryChange=(e)=>{
        const selectedCountry=e.target.value
        setCountry(selectedCountry)
        setCity('')

        if(selectedCountry==="Other"){
            setOtherCountry('')
        }
    }


    const handleCityChange=(e)=>{
        console.log(e)
        let selectedCity=e.target.value
        console.log(selectedCity)
        setCity(selectedCity)
        
        // Find which country the selected city belongs to
        for(let countryName in cities){
            const cityExists = cities[countryName].find(c => c.name === selectedCity)
            if(cityExists){
                setCountry(countryName)
               // setSelectedCities(cities[countryName])
                break
            }
        }
    }
    const handleOtherCountryChange=(e)=>{
        setOtherCountry(e.target.value)
    }

  return (
    <div>
        <h3>Cascading Filters</h3>
        <select className='dropdown' value={country} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {countries.map(country => (
                <option key={country.id} value={country.name}>{country.name}</option>
            ))}
        </select>

        {country != "Other" ? (
            <select className='dropdown' value={city} onChange={handleCityChange}>
            <option value="">Select City</option>
            {availableCities.map(city => (
                <option key={city.id} value={city.name}>{city.name}</option>
            ))}
        </select>
        ) : <input className='dropdown' type="text" placeholder='Enter Country Name' value={otherCountry} onChange={handleOtherCountryChange} />
    }
       
    </div>
  )
}

export default DynamicFilters