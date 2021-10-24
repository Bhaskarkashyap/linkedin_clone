import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const PostContent = ({ img, desc }) => {

    const [seeMore, setSeeMore] = useState(false)
    return (
        <>


            <PostDescription>
                <span>
                    {seeMore ? desc : `${desc.substring(0, 150)}...`}
                    <button onClick={() => setSeeMore(!seeMore)}>{seeMore ? "see less" : "see more"}</button>
                </span>
            </PostDescription>

            <PostImage>
                <img src={img} alt="" />
            </PostImage>
        </>
    )
}

export default PostContent



const PostDescription = styled.div`
max-width: 928px;
margin: 0 auto;
margin-right: 16px;
margin-left: 16px;

span{
    font-size: 14px;

    button{
        background: none;
        border: none;
        outline: none;
        padding: 0 4px;
        color: #0e76a8;
        cursor: pointer;
        font-weight: 600;
    }

}
`;

const PostImage = styled.div`
margin-top: 8px;

img{
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
}
`;
