import "./App.css";

import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import SingleCategory from "./components/SingleCategory";
import Info from "./components/Info";
import Story from "./components/AboutUs";
import Specials from "./components/Specials";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import FAQs from "./components/FAQs";
import Covid19Policy from "./components/Covid19Policy";
function App() {
  return (
    <div>
      <div className="bg-snow">
        <NavBar />
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<SingleCategory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/info" element={<Info />} />
          <Route path="/story" element={<Story />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/covid19" element={<Covid19Policy />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
