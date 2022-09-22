import { Link, Route, Routes } from "react-router-dom"
import About from "../pages/about";
import Nomach from "../pages/nomach";
import TodoContainer from "./TodoContainer";
const Demo = () => {
    return <>
        <div className="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>

                </li>
                   <li>
                    <Link to="/about">About</Link>

                </li>
                   <li>
                    <Link to="/contact">Contact</Link>

                </li>
            </ul>
        </div>
    </>
}

export default Demo;