import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App sm:px-12 lg:px-36 bg-accent">
      <Navbar></Navbar>
      {/* <Home></Home> */}

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
