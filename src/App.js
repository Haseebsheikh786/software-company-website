import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// CodeZento
// WebHarb
// CodeStreamix
