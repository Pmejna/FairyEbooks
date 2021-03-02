import React, {useState} from 'react';
import styled from 'styled-components';
import HomepageItem from '../../components/HomepageItem/HomepageItem';
import {itemsContent} from '../../data/homepage';

const HomepageWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    /* align-items: center; */
    flex-wrap: wrap;
    flex-grow: 1;
`;

const Homepage = () => {
    const [headerContent, setHeaderContent] = useState(itemsContent);
    
    return (
        <HomepageWrapper>
            {headerContent.map(({bgc, title, ...otherContent}, index) => { return <HomepageItem title={title} bgcolor={bgc} key={title} flexBasis={index > 2 ? "50%" : "33%"} {...otherContent}/>
    })}
        </HomepageWrapper>
    )
};

export default Homepage