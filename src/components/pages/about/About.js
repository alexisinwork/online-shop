import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    background: ${({ theme }) => theme.palette.mainBg};
`;

const About = () => (
    <Wrapper>
        About Page
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

export default About;
