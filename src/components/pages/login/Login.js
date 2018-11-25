import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    background: ${({ theme }) => theme.palette.mainBg};
`;

const Login = () => (
    <Wrapper>
        Login Page
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </Wrapper>
);

export default Login;
