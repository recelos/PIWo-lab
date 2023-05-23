export default function HouseCard(props){
  return(
    <div className="house-card">
      <div>
        <h3>{ props.house.street }</h3>
        <h4>${ props.house.price }</h4>
        <h4>{ props.house.city }</h4>
        <p>Bedrooms: { props.house.bedrooms }</p>
      </div>
      <p>{ props.house.description }</p>
  </div>
  )
}