import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 62.5%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}

body,
input,
button,
textarea {
  font-size: 1.6rem;

  font-family: 'Roboto', sans-serif;
  /* font-family: 'Poppins', sans-serif; */
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-height: 100vh;

  background-color: ${({ theme }) => theme.DARK[400]};
  color: ${({ theme }) => theme.LIGHT[300]};
}

a {
  text-decoration: none;
}
button {
  border: none;

}
button, a {
  cursor: pointer;
  transition: filter .2s;
}
button:hover, a:hover {
  filter: brightness(.9);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

::-webkit-scrollbar {
  width: .8rem;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: .8rem;
  background-color: ${({ theme }) => theme.TINTS.CAKE[100]};
}


`;
