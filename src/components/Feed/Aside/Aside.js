import React, { useState } from 'react'
import styled from 'styled-components'
import AddCard from '../AdvertisementCard/AddCard'
import AsideList from './AsideList'
import { ArtCard } from '../GlobalStyles/ArtcardStyle'

const Aside = () => {

    const [showList, setShowList] = useState(false);

    return (
        <AsideConatiner>
            <ArtCard>
                <CardContainer>
                    <ContentCard>

                        <header>
                            <h2>Linkedin News</h2>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                    <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                                </svg>
                            </span>
                        </header>

                        <ListContainer>
                            <AsideList />
                            <AsideList />
                            <AsideList />
                            <AsideList />
                            <AsideList />
                            {
                                showList &&
                                <>
                                    <AsideList />
                                    <AsideList />
                                    <AsideList />
                                    <AsideList />
                                </>
                            }
                            <button onClick={() => setShowList(!showList)}>
                                {showList ? "see Less" : "see more"}
                            </button>


                        </ListContainer>
                    </ContentCard>
                </CardContainer>
            </ArtCard>

            <AddCardContainer>
                <AddCard />
            </AddCardContainer>
        </AsideConatiner>
    )
}

export default Aside

const AsideConatiner = styled.section`
grid-area: aside;



`;

const CardContainer = styled.div`
padding-top: 12px;
padding-bottom: 12px;
@media (max-width:768px){
    display: none;
}

`;

const ContentCard = styled.div`

header{
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
align-items: center;
justify-content: space-between;

h2{
    /* color: rgba(0,0,0,0.6); */
    font-size: 15px;
}
}
`;

export const ListContainer = styled.ul`
list-style-type: none;
margin-top: 8px;
margin-bottom: 4px;
transition: all .1s ease-in-out;
button{
    margin:10px 0 2px 10px;
    cursor: pointer;
}
`;


const AddCardContainer = styled.div`

@media (max-width:768px){
    margin-bottom: 5rem;
}
`;