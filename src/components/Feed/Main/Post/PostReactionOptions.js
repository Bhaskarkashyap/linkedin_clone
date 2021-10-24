import React from 'react'
import styled from 'styled-components';

const PostReactionOptions = ({ path, title }) => {
    return (
        <PostReactionOption>
            <span>
                <button>
                    <div>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                <path d={path} />
                            </svg>
                        </i>
                        <span>{title}</span>
                    </div>
                </button>
            </span>
        </PostReactionOption>
    )
}

export default PostReactionOptions


const PostReactionOption = styled.div`
/* display: flex;
align-items: center;
justify-content: center;
min-height: 40px;
padding: 4px 8px;
flex-wrap: wrap;
box-sizing: border-box; */
flex: 1;

span{
    
    display: inline-block;
    

    button{
   max-width: 480px;
   overflow: hidden;
   text-align: center;
   background: transparent;
   outline: none;
   border: none;
   cursor: pointer;
   padding: 8px 15px;
   &:hover{
       background-color: rgba(0,0,0,0.15);
   }

        div{
            display: flex;
            justify-content: flex-start;
            align-items: center;

            i{
                margin: 0 4px 0 -2px;
                svg{
                    color: rgba(0,0,0,0.6);
                }
            }
            span{
                font-size: 14px;
                color: rgba(0,0,0,0.6);
            }
        }
    }
    
}
`;