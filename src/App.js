import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import ProductList from "./components/ProductList/productList";
import Contact from "./components/Contact/contact";
import { Resume } from "./components/Resume"
import Footer from "./components/Footer/footer";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar expanded={expanded} bg="black" variant="dark" expand="md">
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} className="m-0 border-0"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav onClick={() => setTimeout(() => {setExpanded(false)}, 150)} className="me-auto">
              <Nav.Link className="header-nav" as={Link} to="/">home</Nav.Link>
              <Nav.Link className="header-nav" as={Link} to="/about">about</Nav.Link>
              <Nav.Link className="header-nav" as={Link} to="/portfolio">portfolio</Nav.Link>
              <Nav.Link className="header-nav" as={Link} to="/contact">contact</Nav.Link> 
              <a href="https://docs.google.com/document/d/1xXbP253vQP2q3A78S_o879SPduCugFtQi7cA8gKiJFc/edit?usp=sharing" className="resume" target="_blank" rel="noreferrer">resume</a> 
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Intro/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<ProductList/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </div>
        <Footer fixed="bottom"/>
      </div>
    </Router>
  );
}

export default App;
