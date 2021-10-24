import React from 'react'
import { useSelector } from 'react-redux'
import { selectMessageBoxIsOpen } from '../../features/messageBoxSlice'
import MessageList from './MessageList'
import { InnerBoxContainer, ListSection, MessageBoxContainer } from './MessgeBoxStyle'
import userInformationData from './userInformationData';
import MessageBoxHeader from './MessageBoxHeader'


const MessageBox = () => {
    const isOpen = useSelector(selectMessageBoxIsOpen);

    return (
        <MessageBoxContainer>
            <InnerBoxContainer value={isOpen}>
                <MessageBoxHeader isOpen={isOpen} />

                <ListSection>
                    {
                        userInformationData.map((data) => (
                            <MessageList {...data} key={data.id} />
                        ))
                    }
                </ListSection>

            </InnerBoxContainer>
        </MessageBoxContainer>
    )
}

export default MessageBox
