import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.background};
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.text}
    }
`;
