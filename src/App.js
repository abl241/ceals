import './App.css';
import Header from './components/Header';
import HeroTitle from './components/HeroTitle';
import Mission from './components/Mission';
import Product from './components/Product';
import Team from './components/Team';
import Future from './components/Future';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="hero">
        <HeroTitle />
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="product">
        <Product />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="future">
        <Future />
      </div>
    </div>
  );
}

export default App;
