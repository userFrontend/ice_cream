import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import 'boxicons'
import "boxicons/css/boxicons.min.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/contact" index element={<Contact />} />
          <Route path="*" index element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
