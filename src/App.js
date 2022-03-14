import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/about";
import ProductList from "./components/ProductList/productList";
import Contact from "./components/Contact/contact";
import Toggle from "./components/Toggle/toggle";
import Footer from "./components/Footer/footer";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "black" : "white", color: darkMode && "white"}}>
      <Toggle/>
      <Navbar/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
