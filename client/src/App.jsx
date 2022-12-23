import "./App.css";
import Items from "./components/Items";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import Info from "./components/Info";
import Story from "./components/Story";
import Specials from "./components/Specials";

function App() {
  return (
    <div className="App ">
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/items" element={<Items />} />
          <Route path="/categories/:categoryId" element={<Categories />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/info" element={<Info />} />
          <Route path="/story" element={<Story />} />
          <Route path="/specials" element={<Specials />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
