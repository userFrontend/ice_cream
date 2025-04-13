import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Ishlab-chiqarish from "./pages/Ishlab-chiqarish/Ishlab-chiqarish";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Catalog from "./pages/Catalog/Catalog";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/Notfound/Notfound";
import 'boxicons'
import "boxicons/css/boxicons.min.css";
import "./App.css";
import { useState } from "react";
import Loader from "./components/Loader/Loader";
function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {!open ? <Loader click={setOpen}/> : <div className="body-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" index element={<Home />} />
            {/* <Route path="/ishlab-chiqarish" index element={<Ishlab-chiqarish />} /> */}
            <Route path="/about" index element={<About />} />
            <Route path="/catalog" index element={<Catalog />} />
            <Route path="/contact" index element={<Contact />} />
            <Route path="*" index element={<Navigate to="/" replace />} />
            {/* <Route path="*" index element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>}
    </>
  );
}

export default App;
