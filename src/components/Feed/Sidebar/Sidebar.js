import React from 'react'
import styled from 'styled-components'
import { ArtCard } from '../GlobalStyles/ArtcardStyle'
import Communitycard from './Communitycard'
import { BackgroundImage, ImageContainer, Item, Paragraph, Profilecard, SidebarWidget, UserName } from './SidebarStyle'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <ArtCard>
                <Profilecard>
                    <BackgroundImage />
                    <ImageContainer>
                        <img src="/images/user.svg" alt="" />
                    </ImageContainer>
                    <UserName>
                        <h6>Name</h6>
                    </UserName>
                    <Paragraph>React.js Developer || Front-end-developer</Paragraph>
                </Profilecard>

                <SidebarWidget>
                    <a href="https://linkedin.com" target="_">
                        <div>
                            <span>Connections</span>
                            <span>Grow your network</span>
                        </div>
                        <img src="/images/widget-icon.svg" alt="" />
                    </a>
                    <a href="https://linkedin.com" target="_">
                        <div>
                            <span>Who viewed your profile</span>
                        </div>
                        <p>17</p>
                    </a>
                </SidebarWidget>

                <Item>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />
                        My Itemss
                    </span>
                </Item>
            </ArtCard>

            <Communitycard />
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
grid-area: sidebar;
`;
