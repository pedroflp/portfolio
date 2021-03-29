import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter';
  font-weight: 400;

  scroll-behavior: smooth;
  -webkit-user-drag: none;
  
  filter: saturate(1.03);
}

:root {
  --main: ${props => props.theme.colors.main};
  --secundary: ${props => props.theme.colors.secundary};
  --text: ${props => props.theme.colors.text};
  --background: ${props => props.theme.colors.background};
  --cardBackground: ${props => props.theme.colors.cardBackground};
  --cardBackgroundDarker: ${props => props.theme.colors.cardBackgroundDarker};
  --shadowColor: ${props => props.theme.colors.shadowColor};
  --popupBackground: ${props => props.theme.colors.popupBackground};
}

body {
  background: var(--background);
  color: var(--text);
  
  margin: 0;
  padding: 0;  
}

h1, h2 {
  letter-spacing: -1.5px;
}

strong { 
  font-weight: 700;
  color: var(--main);
}

::selection { 
  background: rgba(15, 231, 98, 0.2);
}

::-webkit-scrollbar {
  width: 4px;
  height: 1px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--main);
  border-radius: 50px;
  
}

::-webkit-scrollbar-thumb:hover {
  background: #009c46;
}

.global-tooltip {
  backdrop-filter: blur(5px) !important;
  padding: 1rem 2rem !important;
  font-size: 0.9rem !important;
  font-weight: 600;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
}

`;