import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="hidden xl:flex gap-[30px] text-[20px] text-white">
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
