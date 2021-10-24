import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container>
                {
                    children
                }
            </Container>
        </>
    )
}

export default Layout

const Container = styled.div`
padding-top: 52px;
margin-top: 40px;
`;