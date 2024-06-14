import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx';
import Nav from './components/Nav.jsx';


function App() {

  const year = new Date().getFullYear()

  return (
    <>
      <Nav></Nav>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />} />
          <Route
            path="/Projects"
            element={<Projects />} />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
      <footer> Designed and Developed by Anthony Micco &copy;{year} </footer>
    </>

  );
}
export default App;
