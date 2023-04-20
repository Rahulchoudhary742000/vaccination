import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Vaccine  from "./components/vaccine/Vaccine";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/vaccine' element={<Vaccine />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
