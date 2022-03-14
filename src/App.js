import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import ProductList from "./components/ProductList/productList";
import Contact from "./components/Contact/contact";
import Toggle from "./components/Toggle/toggle";
import Footer from "./components/Footer/footer";
// import { useContext } from "react";
// import { ThemeContext } from "./context";

function App() {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;

  return (
    // <div style={{backgroundColor:darkMode ? "black" : "white", color: darkMode && "white"}}>
  
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar collapseOnSelect bg="black" variant="dark" expand="md">
          {/* <Toggle/> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-0 border-0"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="header-nav" as={Link} to="/">home</Nav.Link>
              <Nav.Link className="header-nav" as={Link} to="/about">about</Nav.Link>
              <Nav.Link className="header-nav" as={Link} to="/portfolio">portfolio</Nav.Link>
              <Nav.Link className="header-nav" as={Link} to="/contact">contact</Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Intro/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<ProductList/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
    // </div>
  );
}

export default App;
