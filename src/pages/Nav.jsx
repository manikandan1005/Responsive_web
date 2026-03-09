import { Menu, X } from "lucide-react";
import { useState } from "react";

function Nav() {
  const menu = [
    { name: "Home", link: "#home" },
    { name: "Service", link: "#service" },
    { name: "Product", link: "#product" },
    { name: "Contact", link: "#contact" }
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow">
      <div className="flex items-center justify-between py-4 px-6 md:justify-around">
        {/* Logo */}
        <h1 className="text-black font-bold text-2xl">MedicalRecov</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700">
          {menu.map((item, index) => (
            <a key={index} href={item.link} className="hover:text-orange-600">
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="px-6 py-2 font-bold rounded text-orange-600">Login</button>
          <button className="px-6 py-2 font-bold uppercase bg-orange-600 text-white rounded">
            Join us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 py-4 px-6 bg-white md:hidden border-t border-gray-200">
          {menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-orange-600"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {/* Optional mobile buttons */}
          <button className="px-6 py-2 font-bold rounded text-orange-600 text-left w-full">
            Login
          </button>
          <button className="px-6 py-2 font-bold uppercase bg-orange-600 text-white rounded w-full text-left">
            Join us
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;