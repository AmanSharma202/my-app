import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./home";
import React, { Route, Router, Routes, useLocation } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import ExpenseList from "./ExpenseList";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ExpenseTracker from "./components/ExpenseTracker";

function App() {



  const location = useLocation();

  const hideFooterPaths = ["/", "/login"];

  return (

    <div  className="d-flex flex-column min-vh-100" >

{/* {location.pathname !=="/" ?  <Navbar />:null} */}
      <Navbar />


      <main className="flex-grow-1">
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        {/* <Route path="/ExpenseTracker" element={<ExpenseTracker  />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contact" element={<Contact  />} />
      </Routes>
   
      </main>
   <ToastContainer/>
     
     
    {/* //  <Navbar/>
     
     // <SignIn></SignIn> */}
      {/* <Home /> */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
