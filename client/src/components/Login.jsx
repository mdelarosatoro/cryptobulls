import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.main`
    background: rgb(10,20,69);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    `;
    
const LoginContainer = styled.div`
    width: 650px;
    height: 450px;
    border: 1px solid white;
    margin-top: 120px;
    background-color: rgba(60,20,120, 0.6);
    border-radius: 40px;
    transition: 0.3s ease all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: rgba(60,20,120, 0.9);
        transition: 0.3s ease all;
    }
`;

const LoginTitle = styled.span`
    font-size: 3rem;
    margin-top: -1rem;
    margin-bottom: 1rem;
    color: rgb(180,180,180);
`;

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const FieldName = styled.span`
    color: rgb(180,180,180);
    margin-bottom: 1rem;
    font-size: 1.2rem;
`;

const Input = styled.input`
    border-radius: 0.3rem;
    padding: 0.6rem;
    background-color: rgb(180,180,180);
`;

const ButtonContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
`

const Button = styled.button`
    padding: 0.8rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
    color: rgba(60,20,120, 0.9);
    background-color: rgb(180,180,180);
`;

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <LoginContainer>

                <LoginTitle>Login</LoginTitle>

                <FieldContainer>
                    <FieldName type='email' >Email</FieldName>
                    <Input onChange={(e) => setEmail(e.target.value)} value={email} />
                </FieldContainer>

                <FieldContainer>
                    <FieldName >Password</FieldName>
                    <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
                </FieldContainer>

                <ButtonContainer>
                    <Button>Login</Button>
                    <Button>Register</Button>
                </ButtonContainer>

            </LoginContainer>
        </Container>
    )
}

export default Login
