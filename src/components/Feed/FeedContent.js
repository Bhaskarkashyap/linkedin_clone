import React from 'react'
import styled from 'styled-components'
import Aside from './Aside/Aside'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'

const FeedContent = () => {
    return (
        <Container>
            <Sidebar />
            <Main />
            <Aside />
        </Container>
    )
}

export default FeedContent

const Container = styled.div`
max-width: 1128px;
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px,7fr);
padding: 0 30px;
grid-gap: 2.4rem;
column-gap: 2.4rem;
grid-template-areas: "sidebar main aside";
row-gap: 2.4rem;

@media (max-width:768px){
   display: flex;
   flex-direction: column;
   max-width: 900px;
   margin: 0 auto;

}
`;