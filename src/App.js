import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
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
    </div>
  );
}

export default App;
