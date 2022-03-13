import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import ProductList from "./components/ProductList/productList";
import Contact from "./components/Contact/contact";
import Toggle from "./components/Toggle/toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
