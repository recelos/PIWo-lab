import Navbar from './components/Navbar';
import About from './pages/About';
import Main from './pages/Main';
import Houses from './pages/Houses';
import Add from './pages/Add';
import realEstates from './data/realEstates';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  let [houses, setHouses] = useState(realEstates);

  let addHouse = (city, price, street, description, bedrooms) =>{
    let newHouse = {
      city: city,
      price: parseInt(price),
      street: street,
      description: description,
      bedrooms: parseInt(bedrooms)
    }
    setHouses(oldArray => [...oldArray, newHouse]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/houses" element={ <Houses houses={ houses }/> } />
          <Route path="/add" element={ <Add addHouse = {addHouse} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}