import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Nav } from "./Nav.jsx"
import { Header } from './Header.jsx';
import { AboutMe } from './AboutMe';
import { Experience } from './Experience';

function App() {
  return (
    <>
      <body>
        <Nav></Nav>
        <Header></Header>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <footer>Designed and Developed by Anthony Micco</footer>

      </body>

    </>

  );
}
export default App;
