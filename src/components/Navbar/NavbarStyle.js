import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
width: 100vw;
background-color: #fff;
position: fixed;
top: 0;
left: 0;
border-bottom: 1px solid rgba(0,0,0,0.08);
padding: 0 30px;
z-index: 111;

`;

export const NavContent = styled.div`
display: flex;
align-items: center;
min-height: 100%;
max-width: 1128px;
margin: 0 auto;
padding: 0 30px;
`;

export const Branding = styled(NavLink)`
color: inherit;
margin-right: 8px;
display: flex;
align-items: center;
`;

export const Search = styled.div`
flex-grow: 1;
position: relative;
opacity: 1;


& > div{
    input{
          border: none;
          box-shadow: none;
          background-color: #eef3f8;
          border-radius: 2px;
          color: rgba(0 ,0 ,0 ,0.9);
          width: 260px;
          padding: 0 8px 0 40px;
          line-height: 1.75;
          font-weight: 400;
          font-size: 14px;
          height: 34px;
          border-color: #dce6f1;
          vertical-align: top;
          transition: .2s ;

          &:focus {
              width: 80%;
              outline: none;
          }
      }
}

`;
export const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 0;
left: 0;
padding: 8px 8px 8px 16px;
width: 40px;
height: 34px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
transition: background-color 0.15s;

`;


export const Nav = styled.nav`
min-height: 48px;
margin-left: auto;
display: flex;

@media (max-width:768px){
    position: fixed;
    width: 100%;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 60px;

}

ul{
    list-style-type: none;
    display: flex;


    li{
        display: flex;
        align-items: center;

        &:hover{
            .csvg,span{
                color: black;
                fill: black;
            }
        }
    }
}
`;



export const Navigate = styled(NavLink)`
     align-items: center;
      background: transparent;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      font-weight: 400;
      justify-content: center;
      line-height: 1.5;
      min-height: 100%;
      min-width: 80px;
      position: relative;
      text-decoration: none;
    cursor: pointer;
    

 & > .csvg,span{
     fill: rgba(0 ,0 ,0 , 0.6);
     color: rgba(0 ,0 ,0 , 0.6);

 }
 
   &.active{
    &::after{
        content: "";
         transform: scaleX(1);
         border-bottom: 2px solid #fff;
         bottom: 0;
         left: 0;
         position: absolute;
         transition: transform 0.2s ease-in-out;
         width: 100%;
         border-color: rgba(0,0,0,0.9);
         opacity: 1;
    }
    & > .csvg , span{
     fill: rgba(0 ,0 ,0 , 1);
     color: black;
 }
   }

`;

