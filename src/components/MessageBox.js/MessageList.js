import React from 'react';
import { HeaderData, HighlightMessageData, ImageContainer, InnerList, UserData, UserMessage } from './MessageListStyle'

const MessageList = ({ name, message, tag }) => {
    return (

        <InnerList>
            <UserMessage>
                <ImageContainer>
                    <div>
                        {tag}
                    </div>
                </ImageContainer>
                <UserData>
                    <HeaderData>
                        <h4>{name}</h4>
                        <p>12oct</p>
                    </HeaderData>
                    <HighlightMessageData>
                        <p> {message}</p>
                    </HighlightMessageData>
                </UserData>
            </UserMessage>
        </InnerList>

    )
}

export default MessageList
