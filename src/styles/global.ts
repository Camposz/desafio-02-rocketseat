import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1 {
        font-family: 'Baloo 2';
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }

    button, input {
        all: unset;
    }
`;
