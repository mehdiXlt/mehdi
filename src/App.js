import './App.css';
import Header from './components/home/header/header'
import Home from './components/home/home'
import About from './components/home/about/about'
import Skills from './components/home/skills/skill'
import Qualification from './components/home/qualification/qualification';
import Services from './components/home/services/services';
import Project from './components/home/newproject/new';
import Contact from './components/home/contact/contact';
import Footer from './components/home/footer/footer'
import Button  from './components/home/button/button';
import Portfolio from './components/home/potfolio';


function App() {
  
  

  return (
    <div className="App">

        <Header/>
        <Home className='panel'/>
        <About className='panel'/> 
        <Skills className='panel'/>
        <Qualification className='panel'/>
        <Portfolio className='panel'/>
        <Services className='panel'/>  
        <Project className='panel'/>
        <Contact />
        <Footer />
        <Button />

    </div>
  );
}

export default App;
