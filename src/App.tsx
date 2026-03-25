import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./HomePage";
import { ProductPage } from "./product/ProductPage";
import { InvestorsPage } from "./investors/InvestorsPage";
import { MissionPage } from "./mission/MissionPage";
import { AboutPage } from "./about/AboutPage";
import { ContactPage } from "./contact/ContactPage";

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <BrowserRouter {...(routerBasename ? { basename: routerBasename } : {})}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
