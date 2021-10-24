import styled from "styled-components";

export const Header = styled.header`
display: flex !important;
flex-direction: row !important;
height: 48px;
border-bottom: 1px solid rgba(0,0,0,0.08);
padding: 0 8px 0 0 ;
position: relative;

& > div{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
}
`;


export const SectionLeft = styled.section`
display: flex;
flex-direction: row !important;
align-items: center !important;
color: rgba(0,0,0,0.9);
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin-right: 4px;
padding: 4px;
position: relative;
flex-grow: 1;
height: 100%;
cursor: pointer;

div{
    width: 32px;
    height: 32px;
    display: flex;
    position: relative;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: gray;
    color: white;

    span{
        display: inline-block;
        position: absolute;
      bottom: 0;
      right: 0;
        background-color: #057642;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #fff;
    }
}

button{
    max-width: 230px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 8px;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;

    h4{
        color: rgba(0,0,0,0.8);
        font-weight: 600;
        font-size: 14px;
        line-height: 1.42;
    }
}
`;


export const SectionRight = styled.section`
margin-left: auto;
flex-shrink: 0;
opacity: 1;
position: relative;
display: flex;
align-items: center;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    min-width: auto;
    border-radius: 50%;
    outline: none;
    border: none;
transition: .5ms;
    cursor: pointer;
    background: transparent;

&:hover{
    background-color: rgba(0,0,0,0.09);
}
}

`;