import React from 'react' //rafce
import { Nav, NavIcon, NavLink, Bars } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </div>
    )
}

export default Navbar
