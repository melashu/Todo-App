import { Link, NavLink, Route, Routes } from "react-router-dom";
import style from "../css/SideBar.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
const SideBar = ({ isShow, onClick }) => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/about/contact",
      text: "Contact",
    },
  ];
  return (
    <>
      <nav
        className={style.nav}
        style={isShow ? { display: "block", marginRight: "150px" } : null}
      >
        <AiFillCloseCircle className="closemenu" onClick={() => onClick()} />
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id} className={style.listitem}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default SideBar;
