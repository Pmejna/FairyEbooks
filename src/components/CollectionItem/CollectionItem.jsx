import React from 'react';
import styled from 'styled-components';

const CollectionItemWrapper = styled.div`
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-repeat: no-repeat;
    background-size: cover;
    flex-basis: 24%;
    height: 300px;
`;


const CollectionItem = ({imageUrl, name, price, id}) => {
    
    return (
        <CollectionItemWrapper imageUrl={imageUrl} key={id}>
            <p>{name}</p>
            <p>{price}</p>
            <button>SHOP</button>
        </CollectionItemWrapper>
    )
};

export default CollectionItem