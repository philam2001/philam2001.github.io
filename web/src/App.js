import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
    </div>
  );
}

export default App;
