import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav className="bg-transparent dark:bg-transparent shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Brand
            </Link>
          </div>

          {/* Centered Nav Items */}
          <div className="flex-1 flex items-center justify-center sm:justify-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <NavItem to="/" label="Home" />
                <NavItem to="/about" label="About" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LoginButton />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
