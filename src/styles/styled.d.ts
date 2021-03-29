import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      main: string;
      secundary: string;

      text: string;
      background: string;
      cardBackground: string;
      cardBackgroundDarker: string;
      shadowColor: string;
      popupBackground: string;
    }
  }
}