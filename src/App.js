import logo from './logo.svg';
import './App.css';
import './app.scss';
import Navbar from './Components/Navbar/navbar.jsx'
import Sidebar from './Components/sidebar/Sidebar.jsx'

function App() {
  return (
    <div>
      <section id="Homepage">
        <Sidebar/>
        <Navbar/>
      </section>
      <section id = "Services">Parallex</section>
      <section>Services</section>
      <section id="Portfolio">Parallex</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      <section id="About">Contact</section>
      
    </div>
  );
}

export default App;


