import logo from './logo.svg';
import './App.css';
import './app.scss';
import Navbar from './Components/Navbar/navbar.jsx'
import Sidebar from './Components/sidebar/Sidebar.jsx'
import Intro from './Components/intro/Intro.jsx'
import Parallax from './Components/parallax/Parallax.jsx';
import Dsa from './Components/dsa/Dsa.jsx';
import Camera from './Components/camera/Camera.jsx';
import Projects from './Components/projects/Projects.jsx';
import Contacts from './Components/contact/Contacts.jsx';


function App() {
  return (
    <div>
      <section id="Homepage">
        <Sidebar/>
        <Navbar/>
        <Intro/>
      </section>

      <section id = "Coding">
        <Parallax type="DSA"/>
      </section>

      <section id="heightlarger">
          <Dsa/>
      </section>

      <section id="Portfolio">
      <Parallax type="Dev"/>
      </section>


      {/* <section>
        <Camera/>
      </section>



      <section>Portfolio2</section>
      <section>Portfolio3</section> */}


      <Projects/>


      <section id="Contact">
        <Contacts/>
      </section>
      {/* <section id="About">Contact</section> */}
      
    </div>
  );
}

export default App;


