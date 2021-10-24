import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Form from './Form'


const LoginPage = () => {
    const history = useHistory();

    return (
        <>
            <LoginPageContainer>
                <ImageContainer>
                    <img src="/images/illustratorLogin.svg" alt="" />
                </ImageContainer>
                <FormCardContainer>
                    <div>
                        <header>
                            <img src="/images/login-logo.svg" alt="" />
                        </header>
                        <Form />

                        <button onClick={() => history.push('/feed')}>
                            {/* <img src="/images/google.svg" alt="" /> */}
                            <span>Enter without login</span>
                        </button>
                    </div>
                </FormCardContainer>
            </LoginPageContainer>
        </>
    )
}

export default LoginPage


const LoginPageContainer = styled.div`
background: #ffff;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1;

@media (max-width:768px){
    display: none;
}
`;

const FormCardContainer = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;


div{
    width: 360px;
    height: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    border-radius: 4px;
    background-color: #fff;
padding: 20px;

    header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        img{
            background:transparent;
            width: auto;
            height: 35px;
        }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px 14px;
        

        img{
            margin-right: 7px;
        }

        span{
            font-size: 14px;
            letter-spacing: 0.5px;
        }
    }
}
`;
