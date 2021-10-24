import React from 'react'
import styled from 'styled-components'
import { ArtCard } from '../GlobalStyles/ArtcardStyle'
import { ButtonContainer, CardHeading } from './CommunityCardStyle';

import CommnunityData from './CommunityData';

const Communitycard = () => {
    return (
        <ArtCard>
            <CommunityCardContainer>
                {
                    CommnunityData.map((items) => {
                        const { title, icon, List, id, color } = items;
                        return (
                            <CardHeading key={id} color={color}>
                                <section>
                                    <header>
                                        <h4><span>{title}</span></h4>
                                    </header>
                                    <ButtonContainer>
                                        <button>{icon}</button>
                                    </ButtonContainer>

                                </section>

                                <ul>
                                    {
                                        List.map((listItem) => {
                                            const { id, path, headline } = listItem;
                                            return (
                                                <li key={id}>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="rgba(0,0,0,0.6)" width="16" height="16" focusable="false">
                                                            <path d={path} />
                                                        </svg>

                                                        <p>{headline}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </CardHeading>
                        )
                    })
                }



            </CommunityCardContainer>
        </ArtCard>
    )
}

export default Communitycard

const CommunityCardContainer = styled.div`
padding: 8px 0 0 ;
`;
