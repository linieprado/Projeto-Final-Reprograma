import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Menu = () => {
    return (
        <div>
            
            <ul className="menu">
                <li>
                    <Link className="link" to="/">Início</Link>
                </li>
                <li>
                    <Link className="link"to="/Kids">Kids Coders</Link>
                </li>
                <li>
                    <Link className="link"to="/Livros">Livros</Link>
                </li>
                <li>
                    <Link className="link"to="/Autora">Autora</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
