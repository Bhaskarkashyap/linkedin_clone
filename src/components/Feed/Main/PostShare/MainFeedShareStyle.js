import styled from "styled-components";

export const Header = styled.div`
margin: 8px 16px 0 16px;
display: flex;
align-items: center;
div{
    margin-right: 8px;
    img{
        border-radius: 50%;
        height: 45px;
    }
}

button{
    margin: 4px 0;
    flex-grow: 1;
    max-width: none;
    justify-content: left;
    line-height: 1.5;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 35px;
    padding-left: 16px;
    padding-right: 0.8rem;
    font-weight: 600;
    align-items: center;
    display: flex;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    min-height: 3rem;

background: none;
    span{
        color: rgba(0,0,0,0.5);
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        
    }
}



`;
export const Bottom = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
padding: 4px;

span{
    position: relative;

    button{
        background: none;
        border-radius: 2px;
    padding: .8rem 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    max-width: 480px;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-weight: 600;

    &:hover{
        background-color: rgba(0,0,0,0.15);
        cursor: pointer;

    }

    i{
        margin: 0 4px 0 -2px;
       display: inline-block;
       position: relative;
    }

    span{
        white-space: nowrap;
    margin-left: 8px;
    color: rgba(0,0,0,0.6);
    font-size: 14px;

    }
    }

}
`;