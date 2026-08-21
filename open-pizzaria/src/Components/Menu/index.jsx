import "./Menu.css"

const Menu = () => {
    return (
        <>
            <nav className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
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