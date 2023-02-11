import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
     --primary: #121420;
     --secondary: #8338ec;
     --thirdy: #ffbe0b;

    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-700: #323238;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --gray-900: #121214;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--primary);
    color: var(--gray-100);
    font-family: "Inter", sans-serif;
  }

  @media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    }
}

  @media (max-width: 720px) {
    html{
        font-size: 87.5%;
    }

  body, input, textarea, select, button {
  font-family: "Inter", sans-serif;
}
} 
`
