import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import NavList from '../NavList/NavList';

const HeaderWrapper = styled.header`
    nav {   
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

const HeaderLogo = styled(Link)`
    font-weight: 700;
`;


const Header = () => {
    return (
        <HeaderWrapper>
            <nav>
                <HeaderLogo to='/'>LOGO</HeaderLogo>
                <NavList/>
            </nav>
        </HeaderWrapper>
    )
};

export default Header