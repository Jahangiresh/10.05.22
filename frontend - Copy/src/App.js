import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cartpage from "./pages/Cartpage";
import Blogdetails from "./pages/Blogdetails";
import SingleProduct from "./pages/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import Logout from "./components/Logout";
import Dashboard from "./pages/Dashboard";

// import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  let products = JSON.parse(localStorage.getItem("products"));
  const [count, setCount] = useState();

  useEffect(() => {
    setCount(products.length);
  }, [count]);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />

        <Header count={count} setcount={setCount} />
        <Routes>
          <Route path="/" element={<Main setcount={setCount} />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop setcount={setCount} />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/blog/details" element={<Blogdetails />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
