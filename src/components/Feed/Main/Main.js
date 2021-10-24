import React from 'react'
import styled from 'styled-components'
import MainFeedShare from './PostShare/MainFeedShare'

import Post from './Post/Post'
import PostCardData from './PostCardData'

const Main = () => {
    return (
        <MainContainer>
            <MainFeedShare />

            {PostCardData.map((data) => {

                return (
                    <Post {...data} key={data.id} />
                )
            })}



        </MainContainer>
    )
}

export default Main

const MainContainer = styled.div`
grid-area: main;
`;
