import { useState } from "react";
import HouseCard from "../components/HouseCard";

export default function Houses(props){
  const houses = props.houses;

  const [cityQuery, setCityQuery] = useState("");
  const [bedroomsQuery, setBedroomsQuery] = useState("");
  const [descritpionQuery, setDescritpionQuery] = useState("");
  const [sortAscending, setSortAscenting] = useState(false);

  const filterByBedrooms = (i) =>{
    if(bedroomsQuery !== ""){
      return i.bedrooms === parseInt(bedroomsQuery);
    }
    return true;
  }

  const sortByPrice = (a, b) =>{
    if(sortAscending){
      return (a.price > b.price) ? 1 : -1;
    }
    return (a.price <= b.price) ? 1 : -1;
  }

  return(
    <div className="houses">

      <div className="query-container">
        <div className="query">
          <label htmlFor="houses-filter">Filter by city</label>
          <input type="text" name="houses-filter" value={ cityQuery } onChange={ e => { setCityQuery(e.target.value) } }/>
        </div>
        <div className="query">
          <label htmlFor="bedrooms-filter">Filter by number of bedrooms</label>
          <input type="text" name="bedrooms-filter" value={ bedroomsQuery } onChange={ e => { setBedroomsQuery(e.target.value) } }/>
        </div>
        <div className="query">
          <label htmlFor="description-filter">Filter by description</label>
          <input type="text" name="description-filter" value={ descritpionQuery } onChange={ e => { setDescritpionQuery(e.target.value) } }/>
        </div>
      </div>
      <button onClick={ () => setSortAscenting(!sortAscending) }>Sort by price</button>
      {
        houses
        .sort(sortByPrice)
        .filter(it => it.city.includes(cityQuery))
        .filter(filterByBedrooms)
        .filter(it => it.description.includes(descritpionQuery))
        .map((house, i) => { return( <HouseCard key={ i } house={ house } /> ) })
      }
    </div>
  );
}