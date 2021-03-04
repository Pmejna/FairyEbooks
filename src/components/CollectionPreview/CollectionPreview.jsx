import React from 'react';
import styled from 'styled-components';

import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionWrapper = styled.div`
    
`;

const CollectionItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

const CollectionPreview = ({title, items}) => {
    const collectionsItems = items.map( ({id, ...otherItems}) => (
        <CollectionItem key={id} {...otherItems}></CollectionItem>
        )).splice(0, 4);
    return (
        <CollectionWrapper>
            <h1>{title.toUpperCase()} </h1>
            <CollectionItems>
                {
                    collectionsItems
                }
            </CollectionItems>
        </CollectionWrapper>
    )
};


export default CollectionPreview