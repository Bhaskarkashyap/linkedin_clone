import React from 'react'
import { useDispatch } from 'react-redux';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { closeMessageBox, openMessageBox } from '../../features/messageBoxSlice';
import { Header, SectionLeft, SectionRight } from './MessageBoxHeaderStyle';

const MessageBoxHeader = ({ isOpen }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Header>
                <SectionLeft>
                    <div>
                        U
                        <span></span>
                    </div>

                    <button>
                        <h4><span>Messaging</span></h4>
                    </button>
                </SectionLeft>

                <SectionRight>
                    <button>
                        <img src="/images/threedot.svg" alt="" />
                    </button>
                    <button>
                        <img src="/images/edit.svg" alt="" />
                    </button>
                    {isOpen ?
                        <button onClick={() => dispatch(closeMessageBox())}>
                            <BsChevronCompactDown />
                        </button>
                        :
                        <button onClick={() => dispatch(openMessageBox())}>
                            <BsChevronCompactUp />
                        </button>

                    }
                </SectionRight>
            </Header>
        </div>
    )
}

export default MessageBoxHeader
