import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const HomepageItemWrapper = styled.section`
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-basis: ${({flexBasis}) => true && flexBasis};
    background-color: ${({bgcolor}) => bgcolor};

`;

const HomepageItemText = styled.div`
    min-width: 250px;
    padding: 1rem;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2, p {
        margin: 0;
    }
`;

const HomepageItem = ({title, subtitle, bgcolor, key, flexBasis, history, linkUrl, match}) => {
    console.log(linkUrl);
    return (
        <HomepageItemWrapper key={key} flexBasis={flexBasis} bgcolor={bgcolor} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <HomepageItemText title={title} subtitle={subtitle} >
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </HomepageItemText>
        </HomepageItemWrapper>
    )
};

export default withRouter(HomepageItem)