import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <Home></Home>
        {/* <About></About> */}
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
