import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/Countries/Countries'
import Country from './components/Country/Country'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}

      <Countries></Countries>
      <Country></Country>
      
      
    </div>
  )
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data =>setCountries(data))
//   }, [])
//   return(
//     <div>
//       <h1>Visiting Every Country Of The World!</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App
