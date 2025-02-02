import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center z-50">
      {/* Logo / Name with Custom Font */}
      <h1 className="text-2xl font-bold text-gray-800 font-[Poppins]">
        My Portfolio
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* Hamburger Menu Button (Always Menu Icon) */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} />
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-gray-800 text-lg font-medium hover:text-purple-600 transition duration-300"
  >
    {children}
  </Link>
);

export default Header;
