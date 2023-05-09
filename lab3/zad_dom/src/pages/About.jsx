import AboutCart from "../components/AboutCard";

let cards = [
  {
    title: "Expertise",
    content: "Our real estate company has a team of highly skilled professionals who possess extensive knowledge of the real estate market, ensuring that our clients receive the best possible advice and guidance."
  },
  {
    title: "Personalized Service",
    content: "We understand that each client has unique needs and preferences, which is why we provide personalized service that is tailored to meet individual requirements."
  },
  {
    title: "Trustworthy",
    content: "we have built repotutation of being a trustworthy real estate company that operates with honesty, transparency, and integrity. Our clients can rely on us to alwats act in their best interests."
  },
  {
    title: "Exceptional Results",
    content: "We have a track record of achieving exceptional results for our clients, whether it's finding the perfect home, securing a profitable investments property, or selling a property at the best possible price."
  }
]

export default function About(){
  return(
    <section className="about-section" id="about-section">
      <div className="about-title">
        <img className="dots-about" src="dots about section.svg" alt="kropeczki" />
        <h3>
          At Evilla we help you turn the key to the future
        </h3>
      </div>  

      <div className="about-content">
        { cards.map((card, i) => { return <AboutCart key={i} title = { card.title } content = { card.content } />}) }
      </div>
    </section>
  )
}