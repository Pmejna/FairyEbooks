import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavListWrapper = styled.ul`

`;
 
const NavList = () => {
    return (
        <NavListWrapper>
            <Link to='/shop'>SHOP</Link>
            <Link to='/contact'>CONTACT</Link>
            <Link to='/about'></Link>
        </NavListWrapper>
    )
};

export default NavList