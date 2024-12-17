import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Experience />
    </div>
  );
}

export default App;
