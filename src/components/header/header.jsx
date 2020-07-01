import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => (
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="nav-links">
            <Link className="links" to="/shop">
                SHOP
            </Link>
            <Link className="links" to="/contact">
                CONTACT
            </Link>
        </div>
    </div>
)

export default Header;