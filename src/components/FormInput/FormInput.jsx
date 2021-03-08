import React from 'react';
import styled from 'styled-components';

const FormInputWrapper = styled.div`

`;

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <FormInputWrapper>
            <input onChange={handleChange} {...otherProps}></input>
            {label ? <label>{label}</label> : null}            
        </FormInputWrapper>
    )
};

export default FormInput