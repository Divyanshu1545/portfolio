import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Services"><Parallax type='services'/> </section>
      <section><Services/></section>
      {/* <section id="Portfolio"><Parallax type='portfolio'/></section> */}
      <section id="Experience">Parallax</section>
      <section id="Education">Education</section>
      <section id="Skills">Skills</section>
      <section><Parallax/></section>
      <section id="Contact"></section>
    </div>
  );
};

export default App;
