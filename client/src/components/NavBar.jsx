import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

export default function NavBar() {
  return (
    <div class="flex justify-evenly items-center bg-slate-700 mb-6">
      <h3 class="text-white ">China Center</h3>

      <Link to="/menu">Menu</Link>
    </div>
  );
}
