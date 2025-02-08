import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'boxicons'
import { InfoProvider } from './context/infoContext.jsx';

AOS.init({
  duration: 1500
});


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <InfoProvider>
      <App />
    </InfoProvider>
  </BrowserRouter>,
)
