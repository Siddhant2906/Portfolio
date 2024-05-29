import logo from './logo.svg';
import './App.css';
import './app.scss';
import Navbar from './Components/Navbar/navbar.jsx'
import Sidebar from './Components/sidebar/Sidebar.jsx'
import Intro from './Components/intro/Intro.jsx'
import Parallax from './Components/parallax/Parallax.jsx';

function App() {
  return (
    <div>
      <section id="Homepage">
        <Sidebar/>
        <Navbar/>
        <Intro/>
      </section>

      <section id = "Services">
        <Parallax type="DSA"/>
      </section>
      <section>Services</section>

      <section id="Portfolio">
      <Parallax type="Dev"/>
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>


      <section id="Contact">Contact</section>
      <section id="About">Contact</section>
      
    </div>
  );
}

export default App;


