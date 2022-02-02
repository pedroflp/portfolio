import React from 'react';
import Lottie from 'react-lottie'
import { useTheme } from '../../styles/themes/ThemeContext';
import './style.css'

import Moon from '../../media/moon.json'
import Sun from '../../media/sun.json'
import ReactTooltip from 'react-tooltip';

export const ThemeSwitcher = () => {
  const { defaultTheme, toggleTheme } = useTheme()

  const defaultAnimationOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
  }

  return (
    <button data-for='theme-switcher' data-tip style={{ backgroundColor: '#09090a' }} onClick={() => toggleTheme()} className="theme-switcher-container">
      {/* {defaultTheme.title === "dark"
        ? <img src="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-moon-halloween-bearicons-flat-bearicons.png" />
        : <img src="https://img.icons8.com/color/48/000000/sun--v2.png" />
      } */}
      <Lottie
        options={{ ...defaultAnimationOptions, animationData: defaultTheme.title === "dark" ? Moon : Sun }}
        style={{
          height: defaultTheme.title === "dark" ? 80 : 39,
          marginTop: defaultTheme.title === "dark" ? 5 : 0,
        }}
      />
      <ReactTooltip backgroundColor='#09090a' place='right' arrowColor='transparent' id='theme-switcher' effect='solid'>{defaultTheme.title} theme</ReactTooltip>
    </button>
  )
};
