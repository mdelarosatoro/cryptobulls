import React from 'react'
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100vw;
    height: 80px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,26,136,1) 35%, rgba(0,212,255,1) 100%);
    padding: 20px;
`;

const NavTitle = styled.h2`
    color: #f6f6f6;
    font-size: 2rem;
    margin-left: 50px;
`;

function Navbar() {
    return (
        <Nav>
            <NavTitle>Bull Exchange</NavTitle>
        </Nav>
    )
}

export default Navbar
