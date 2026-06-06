import hero from '../assets/hero.jpg';
function Hero() {
    return (
      <section className="hero">
          <img src={hero} alt="hero" className="w-full h-auto" />
       
      </section>
    )
}
export default Hero;