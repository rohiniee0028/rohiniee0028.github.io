import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Projects } from './Components/Projects';
import { Calender } from './Components/Calender';
import { GithubStats } from './Components/GithubStats';
import Header from './Components/Header';
import  Slider  from './Components/TechSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import SendMail from './Components/SendMail';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <br/>
       <br/>
       <Header/>
       <About/> 
       <Projects/>
       <Slider/>
       <Calender/>
       <GithubStats/>
       <Contact/>
       <SendMail/>
       <Footer/>
    </div>
  );
}

export default App;
