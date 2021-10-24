import styled from "styled-components";

export const Recent = styled.div`
margin-bottom: 16px;
&:last-child{
    border-top: 1px solid rgba(0,0,0,.15);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0;
    &:hover{
        background-color: rgba(0,0,0,0.08);
    }

    h4{
        color: rgba(0,0,0,0.6);
        text-align: center;
     
    }
}

& > section{
    display: flex;
    align-items: center;
    overflow: hidden;

    & > header {
    flex: 1;
    text-align: left;
    padding-left: 0.8rem;
    
     & >h4{
    font-size: 12px;
    color: ${({ color }) => color ? "#0072b1" : "rgba(0,0,0,0.9)"};
    cursor: pointer;

    &:hover{
            text-decoration: underline;
        }

     }
}
}

ul{
    list-style-type: none;

    li{
        display: flex;
        justify-content: space-between;
        padding: 3px 0;
        transition: .2s ease-in-out;

        &:hover{
        background-color: rgba(0,0,0,0.08);
        cursor: pointer;
    }

        div{
          
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding:0 12px ;
           max-width: 97%;

           p{
               font-size: 12px;
               width: 100%;
               white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            align-items: center;
            padding-left: 5px;
           }
        }
    }
}

`;

export const ButtonContainer = styled.div`
display: flex;

button{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 4px 0 0 ;
    background: none;
    outline: none;
    border: none;
    font-size: 2rem;
}
`;