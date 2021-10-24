import styled from "styled-components";

export const InnerList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
flex: 1;
width: 100%;
`;


export const UserMessage = styled.div`
height: 66px;
display: flex;
align-items: center;
flex-direction: row;
width: 100%;
padding-left: 8px;
position: relative;
width: 100%;
overflow:hidden ;
`;


export const ImageContainer = styled.div`
min-width: 48px;

div{
    height: 48px;
width: 48px;
border-radius: 50%;
background-color: #0072b1;
display: flex;
justify-content: center;
align-items: center;
color: white;
}
`;

export const UserData = styled.div`
overflow: hidden;
width: 100%;
padding: 8px 12px 8px 8px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    line-height: 1.4;

h4{
    font-size: 14px;
}

p{
    font-size: 12px;
    color: rgba(0,0,0,0.6);
}
`;


export const HeaderData = styled.div`
height: auto;

display: flex;
vertical-align: top;
justify-content: space-between;
width: 100%;
`;

export const HighlightMessageData = styled.div`
display: flex;
width: 80%;
    flex-wrap: nowrap;

p{
    overflow:hidden ;
    text-overflow: ellipsis;
white-space:nowrap;
line-clamp: 2;
box-orient: vertical;
flex-wrap: wrap;
}
`;

