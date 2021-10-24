import React, { useState } from 'react'
import { Branding, Header, Nav, NavContent, Navigate, Search, SearchIcon } from './NavbarStyle';
import NavItemData from './Data';
import Profile from './Profiles'

const Navbar = () => {
    const [NavItem] = useState(NavItemData)


    const target = (name) => {
        if (name === "Home") {
            return "feed"
        }
        else if (name === `My${" "}Network`) {
            return "mynetwork"
        }
        else {
            return name
        }
    }

    return (
        <Header>
            <NavContent>
                <Branding to="/feed">
                    <img src="/images/logo.svg" alt="" />
                </Branding>

                <Search>

                    <div>
                        <input type="search" placeholder="search" />
                    </div>
                    <SearchIcon>
                        <img src="/images/searchIcon.svg" alt="" />
                    </SearchIcon>
                </Search>

                <Nav>
                    <ul>
                        {NavItem.map((item, index) => {
                            return (
                                <li key={index} >
                                    <Navigate to={`/${target(item.name)}`}
                                        activeClassName="active"
                                    >


                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="csvg" >
                                            <path d={`${item.path}`}></path>
                                            <path d={`${item.path2}`}></path>
                                        </svg>

                                        <span>{item.name}</span>
                                    </Navigate>
                                </li>
                            )
                        })}
                    </ul>
                    <Profile img="/images/user.svg" name="Me" icon="/images/down-icon.svg" />
                    <Profile img="/images/nav-work.svg" name="Work" icon="images/down-icon.svg" Border />
                </Nav>

            </NavContent>
        </Header>
    )
}

export default Navbar
