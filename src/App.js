import './App.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Navigation/Nav';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Hero/>
      <Portfolio/>
    </div>
  );
}

export default App;
