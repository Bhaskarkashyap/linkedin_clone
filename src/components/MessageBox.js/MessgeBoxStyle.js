import styled from "styled-components";



export const MessageBoxContainer = styled.aside`
position: fixed;
bottom: 0;
right: 0;
overflow: visible;
display: flex;
flex-wrap: nowrap;
z-index: 111;

@media  (max-width:768px){
    display:none;
}
`;

export const InnerBoxContainer = styled.div`
display: flex;
flex-direction: column;
flex: 288px;
width: 288px;
background-color: #fff;
height: calc(100vh - 100px);
transform: ${({ value }) => value ? "translateY(0)" : "translateY(95%)"};
border-top-left-radius: 0.8rem;
border-top-right-radius: 0.8rem;
transition:all .3s ease-in-out ;

@media (max-width:1400px) and (min-width:1000px){
    transform: ${({ value }) => value ? "translateY(0)" : "translateY(92%)"};
    

}
@media (max-width:1000px) and (max-width:768px){
    transform: ${({ value }) => value ? "translateY(0)" : "translateY(95%)"};
    

}


`;


export const ListSection = styled.section`
overflow-y: auto;
position: relative;
display: flex !important;
flex-direction: column !important;
width: 100%;
`;
