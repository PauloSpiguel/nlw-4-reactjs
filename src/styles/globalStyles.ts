import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

:root {
  --background: ${({ theme }) => theme.colors.background};
  --text: ${({ theme }) => theme.colors.text};
  --primary: ${({ theme }) => theme.colors.primary};
  --white: #fff;
  --gray-line: #dcdde0;
  --text-highlight: #b3b6ff;
  --title: #2e384d;
  --red: #e83f5b;
  --green: #4cd62b;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;

  --dark: #282c30;
  --dark-line: #22223b
  --light: #f1f1f1;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html {
    font-size: 87.5%;
  }
}

body, input, textarea, button {
  font: 400 1rem "Inter", sans-serif
}

body {
  transition: background 0.2s linear;
  background: var(--background);
  color: var(--text);
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

`
