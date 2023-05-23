import Navbar from './components/Navbar';
import About from './pages/About';
import Main from './pages/Main';
import Houses from './pages/Houses';
import Add from './pages/Add';
import { UserProvider } from './providers/UserProvider'
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
    .get('./data/realEstates.json')
    .then(response => {
      let data = response.data;
      setHouses(data);
    });
  },[]);

  const addHouse = (city, price, street, description, bedrooms) =>{
    const newHouse = {
      city: city,
      price: parseInt(price),
      street: street,
      description: description,
      bedrooms: parseInt(bedrooms)
    }
    setHouses(oldArray => [...oldArray, newHouse]);
  }

  return(
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/houses" element={ <Houses houses = { houses }/> } />
            <Route path="/add" element={ <Add addHouse = { addHouse } /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}