
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Testimonials from './components/testimonials/Testimonials';
import Work from './components/work/Work';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Testimonials/>
        <Contact/>
       
      </main>
      <Footer/>
        <ScrollUp/>
    </div>
  );
}

export default App;
