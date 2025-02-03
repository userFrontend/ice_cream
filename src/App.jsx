import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Header from "./components/Header/Herader";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="*" index element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
