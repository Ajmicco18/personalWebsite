import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Nav } from "./Nav.jsx"
import { Header } from './Header.jsx';
import { AboutMe } from './AboutMe';
import { Experience } from './Experience';

function App() {
  return (
    <>

      <Nav></Nav>
      <Header></Header>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <footer> Designed and Developed by Anthony Micco &copy;2023 </footer>

    </>

  );
}
export default App;
