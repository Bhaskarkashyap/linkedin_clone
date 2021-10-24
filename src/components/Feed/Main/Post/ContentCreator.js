import React from 'react'
import styled from 'styled-components';

const ContentCreator = ({ userTag, userName }) => {
    return (
        <ContentWrite>
            <ImageContainer>
                {userTag}
            </ImageContainer>
            <ProfileNameContainer>
                <h2>{userName}</h2>
                <p>linkedin member</p>
                <p>2h</p>
            </ProfileNameContainer>

        </ContentWrite>
    )
}

export default ContentCreator


const ContentWrite = styled.div`
flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;

`;

const ProfileNameContainer = styled.div`
margin-left: 8px;

p{
    font-size: 12px;
   color: rgba(0,0,0,0.6);
}
`;



const ImageContainer = styled.div`
width: 50px;
height: 50px;
background-color: grey;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
font-size: 20px;
color: white;
`;
