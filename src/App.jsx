import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Nav from "./components/Nav.jsx"
import Header from './components/Header.jsx'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'

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
