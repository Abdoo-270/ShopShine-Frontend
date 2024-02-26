import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 6, url: "orders", text: "orders" },
  { id: 7, url: "control-products", text: "control products" },

  { id: 8, url: "control-users", text: "control users" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if (
          (url === "checkout" ||
            url === "orders" ||
            url === "control-products" ||
            url === "control-users") &&
          !user
        )
          return null;
        if (user) {
          if (
            user.role === "user" &&
            (url === "control-products" || url === "control-users")
          ) {
            return null;
          }
          if (
            user.role === "admin" &&
            (url === "products" ||
              url === "cart" ||
              url === "checkout" ||
              url === "orders")
          ) {
            return null;
          }
        }
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
