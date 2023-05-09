import { useState } from "react"

export default function Add(props) {
  let [city, setCity] = useState("");
  let [price, setPrice] = useState("");
  let [street, setStreet] = useState("");
  let [description, setDescription] = useState("");
  let [bedrooms, setBedrooms] = useState("");


  let handleSubmit = (e) =>{
    e.preventDefault();
    if(isNaN(price) || city ==="" || street==="" || description==="" || isNaN(bedrooms)){
      alert("Wrong data!")
      return;
    }
    props.addHouse(city, price, street, description, bedrooms);
    setCity("");
    setPrice("");
    setStreet("");
    setDescription("");
    setBedrooms("");
  }

  return(
    <form className="add-section">
      <label>
      City:
      <input type="text" value={ city } onChange={ e => { setCity(e.target.value) } }/>
      </label>
      <label>
      Price:
      <input type="text" value={ price } onChange={ e => { setPrice(e.target.value) } }/>
      </label>
      <label>
      Street:
      <input type="text" value={ street } onChange={ e => { setStreet(e.target.value) } }/>
      </label>
      <label>
      Bedrooms:
      <input type="text" value={ bedrooms } onChange={ e => { setBedrooms(e.target.value) } }/>
      </label>
      <label>
      Description:
      <input type="text" value={ description } onChange={ e => { setDescription(e.target.value) } }/>
      </label>
      <button type="button" onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  )
}