import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Nav from './components/Navigation/Nav';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Hero/>
      <Portfolio/>
      <About/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
