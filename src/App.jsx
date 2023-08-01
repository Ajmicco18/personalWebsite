import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Nav } from "./Nav.jsx"
import { Header } from './Header.jsx';
import { AboutMe } from './AboutMe';

function App() {
  return (
    <>

      <Nav></Nav>
      <Header></Header>
      <AboutMe></AboutMe>
      <footer>Designed and Developed by Anthony Micco</footer>

    </>

  );
}
export default App;
