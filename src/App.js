import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Projects } from './Components/Projects';
import { Calender } from './Components/Calender';
import { GithubStats } from './Components/GithubStats';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <Header/> 
       <Projects/>
       <Calender/>
       <fire/>
       <GithubStats/>
    </div>
  );
}

export default App;
