import React from 'react' //rafce
import { Nav, NavIcon, NavLink, Bars } from './NavbarElements'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </div>
    )
}

export default Navbar
