import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/home_component/Home";
import About from "./pages/about_component/About";
import Services from "./pages/services_coponents/Services";
import Blogs from "./pages/blogs_component/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;