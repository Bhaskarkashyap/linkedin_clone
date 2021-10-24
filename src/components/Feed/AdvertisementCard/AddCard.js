import React from 'react'
import styled from 'styled-components'
import { ArtCard } from '../GlobalStyles/ArtcardStyle'

const AddCard = () => {
    return (
        <ArtCard>
            <Header>
                <p>Ad...</p>
            </Header>

            <CenterContent>
                <p>BONUS : get full premium features and insights</p>
                <div>
                    <UserImage>
                        <img src="/images/user.svg" alt="" />
                    </UserImage>
                </div>
                <h2>UserName, unlock access to Linkedin Learning</h2>

                <button>Unlock for free</button>
            </CenterContent>
        </ArtCard>
    )
}

export default AddCard

const Header = styled.header`
width: 100%;
text-align: right;
padding:12px;

p{
    font-size: 13px;
}
`;

const CenterContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

p{
    font-size: 13px;
    padding-left: 12px;
    padding-right: 12px;
    color: rgba(0,0,0,0.6);
}

h2{
    font-size: 14px;
    text-align: center;
    line-height: 1.2;
    color: rgba(0,0,0,0.9);
}

button{
    margin: 12px;
    background: none;
    color: #0e76a8 ;
    padding: 8px 12px;
    border: none;
    border: 1px solid #0e76a8;
    border-radius: 20px;
}
div{
    display: flex;
    margin: 12px;
}

`;
const UserImage = styled.div`

img{
    border-radius: 50%;
    height: 80px;
}
`
