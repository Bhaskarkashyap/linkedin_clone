import React from 'react'
import styled from 'styled-components';

const AsideList = () => {
    return (
        <div>
            <List>
                <a href="https://linkedin.com">
                    <div>
                        <span></span>
                        <h2>How to make the most of your job ?</h2>
                    </div>
                    <TimeLine>
                        1d ago .636 readers
                    </TimeLine>
                </a>
            </List>
        </div>
    )
}

export default AsideList;

export const List = styled.li`
   a{
        text-decoration: none;

        div{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-right: 24px;
            margin-top: 4px;
            color: rgba(0,0,0,0.9);
            font-size: 14px;
            font-weight: bold;
            display: flex;
            align-items: center;

            span{
                display: inline-block;
                width: 6px;
                height: 6px;
                margin:0 12px 0 14px ;
                border: 3px solid rgba(0,0,0,1);
                border-radius: 50%;
                
            }
        }

   
    }
`;


const TimeLine = styled.span`
padding-left: 32px;
padding-right: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0,0,0,0.6);
    font-size: 12px;
`;