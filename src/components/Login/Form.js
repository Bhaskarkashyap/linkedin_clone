import React from 'react'
import styled from 'styled-components'

const Form = () => {
    const handleClick = (e) => {
        e.preventDefault();
    }
    return (
        <FormContainer onSubmit={(e) => handleClick(e)}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <button>Log in</button>
            <article>
                {/* <span>Note</span> */}
                <span>You can click on the button bellow and jump to the feed page without fill the form.</span>
            </article>
        </FormContainer>
    )
}

export default Form


const FormContainer = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 85%;

input{
width: 100%;
margin-top: 12px;
/* font-size: 1.6rem; */
      line-height: 1.5;
      font-weight: 400;
      /* height: 48px; */
      border: 1px solid rgba(0,0,0,0.6);
      border-radius: 2px;
      padding: 20px 150px 4px 5px ;
      outline: none;
      vertical-align: middle;
}

button{
    margin: 20px;
    padding: 8px 15px !important;
    width: 85%;
    font-size: 1.11rem;
    background: none;
    border:1px solid  #0073b1;
    color: #0073b1;
    border-radius: 135px;
    /* outline: none; */
    cursor: pointer;

    :hover{
        background-color: whitesmoke;
        /* color: white; */
    }
}

article{
    display: flex;

    justify-content: center;
    span{
        color: #0073b1;
        font-weight: bold;
        font-size: 15px;
    }


}
`;