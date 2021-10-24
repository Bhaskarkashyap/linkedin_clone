import styled from "styled-components";

export const Profilecard = styled.div`
border-bottom: 1px solid rgba(0,0,0,.15);
padding: 12px 12px 16px;
border-bottom-color: rgba(0,0,0,0.08);
word-wrap: break-word;
word-break: break-word;
text-align: center;
`;

export const BackgroundImage = styled.div`
background-image: url("https://media-exp1.licdn.com/dms/image/C4E16AQGTx22rd07QGg/profile-displaybackgroundimage-shrink_200_800/0/1610558234742?e=1639612800&v=beta&t=a6Fa5neW38yGsOA7BNcI013oKQDvIQE9PyX3IkwNnRY");
background-position: center;
background-size: cover;
display: block;
height: 54px;
margin: -12px -12px 0;

`;


export const ImageContainer = styled.div`
img{
border-radius: 50%;
margin: -38px auto 12px;
border: 2px solid #fff;
background-color: #fff;
height: 64px;
}
`;


export const UserName = styled.div`
line-height: 1.5;
font-size: 1rem;
color: rgba(0,0,0,0.9);
vertical-align: center;
`;

export const Paragraph = styled.p`
margin-top: 4px;
color: rgba(0,0,0,0.6);
font-size: 12px;
`;

export const SidebarWidget = styled.div`
padding-top: 12px;
padding-bottom: 12px;
border-bottom: 1px solid rgba(0,0,0,.15);

& > a {
text-decoration: none;
display: flex;
justify-content: space-between;
align-items: center;
padding: 4px 12px;
color: black;

&:hover{
    background-color: rgba(0,0,0,0.08);
}
p{
    font-size: 12px;
        line-height: 1.333;
        color: #0072b1;
        font-weight: bold;
}
div{
    display: flex;
    flex-direction: column;
    text-align: left;

    span{
        font-size: 12px;
        line-height: 1.333;

        &:first-child{
            color: rgba(0,0,0,0.6);
        }
    }
}
}
`;


export const Item = styled.div`
text-align: left;
padding: 12px;
font-size: 12px;
display: block;

span{
display: flex;
align-items: center;
}
&:hover{
    background-color: rgba(0,0,0,0.08);
}
`;