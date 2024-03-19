import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";

import Link from "../Link/Link";
const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div
        onClick={() => {
          return setOpen(!open);
        }}
        className="text-2xl"
      >
        {open === true ? (
          <MdOutlineClose></MdOutlineClose>
        ) : (
          <RiMenu2Fill className=""></RiMenu2Fill>
        )}
      </div>

      <ul
        className={`md:flex absolute duration-1000 bg-cyan-300 
      ${open === true ? "top-24" : "-top-52"}
      rounded-xl p-4 `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
