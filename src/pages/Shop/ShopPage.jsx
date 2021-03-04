import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import {SHOP_DATA} from '../../data/shopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.PureComponent {
    constructor(props) {
        super(props);
            this.state = {
                collections: SHOP_DATA,
            }
        }

        render() {
            const {collections} = this.state;
        return (
            <>
                {collections.map(({id, ...collectionRestProps}) => (<CollectionPreview id {...collectionRestProps} key={id}/>))}
            </>
        )
    }
};

export default ShopPage