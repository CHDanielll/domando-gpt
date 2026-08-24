import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = () => {
    return (
        <>
            <nav className="menu">
                <ul> 
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><a href="#">Cardápio</a></li>
                    <li>
                        <ul className="submenu">
                            <li>
                                <a href="#">Fale Conosco</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Menu