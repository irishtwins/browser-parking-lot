import React from 'react';
import { NavLink } from 'reactstrap'


import './NavBar.css'


export default function NavBar(){
    return (
        <div>
            <NavLink href="./">Home</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </div>
    );
}
