
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import AboutUs from "./pages/About_us";
import Products from "./pages/Products";
import ShippingDelivery from "./pages/Shipping_delivery";
import Authentication from "./pages/Authentication";
import './App.css';



function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about_us" element={<Layout><AboutUs /></Layout>} />
      <Route path="/products" element={<Layout><Products /></Layout>} />
      <Route path="/shipping_delivery" element={<Layout><ShippingDelivery /></Layout>} />
      <Route path="/authentication" element={<Authentication />} />
    </Routes>
   </Router>
  );
}

export default App;
