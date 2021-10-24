import React from 'react'
import styled from 'styled-components';

const Profile = ({ img, name, icon, Border }) => {
    return (
        <ProfileContent Border={Border}>
            <span>
                <img src={img} alt="" />
                <p>{name}
                    <img src={icon} alt="" />
                </p>
            </span>
        </ProfileContent>
    )
}

export default Profile


const ProfileContent = styled.div`
border-left: ${({ Border }) => Border ? "1px solid rgba(0 ,0 ,0 ,0.08)" : null};
span{
    align-items: center;
      background: transparent;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      font-weight: 400;
      justify-content: center;
      line-height: 1.5;
      min-height: 48px;
      min-width: 80px;
      position: relative;
      text-decoration: none;
    cursor: pointer;
    

}

  display: flex;
  align-items: center;


  span > img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
  }

    p,img{
        display: flex;
        align-items: center;
        color: rgba(0,0,0,0.6);
    

        &:hover{
            color: rgba(0,0,0,1);
        }
    }
`;
