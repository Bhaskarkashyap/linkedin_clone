import React from 'react'
import styled from 'styled-components';

const PostHeader = () => {
    return (
        <PostHeaderContainer>
            <div>
                <span>User </span>
                <span>liked this</span>
            </div>
            <img src="/images/threedot.svg" alt="" />
        </PostHeaderContainer>
    )
}

export default PostHeader

const PostHeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 12px;
padding-bottom: 12px;
border-bottom: 1px solid rgba(0,0,0,0.08);
margin-left: 16px;
margin-right: 16px;
div{
    
    span{
    font-size: 14px;

    &:first-child{
        font-weight: bold;
        margin-right: 3px;
    }

    &:nth-child(2){
        font-size: 12px;
    }
}
}


img{
    cursor: pointer;
}
`;