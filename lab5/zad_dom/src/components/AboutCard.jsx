export default  function AboutCart(props){
  return (
    <div className="about-card">
      <h4>{ props.title }</h4>
      <p>{ props.content }</p>
    </div>
  )
}