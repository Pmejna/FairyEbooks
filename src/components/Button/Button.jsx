import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button``;

const Button = ({children, ...otherProps}) => {
    return (
        <ButtonStyled {...otherProps}>{children}</ButtonStyled>
    )
};

export default Button