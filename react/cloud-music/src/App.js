import React,{useState, useEffect, useContext} from 'react'
import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './routes'
import {GlobalStyle} from './style'
import {IconStyle} from './assets/iconfont/iconfont'



const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App1() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  const theme = useContext(ThemeContext);
  console.log('@Toolbar',theme);
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  console.log('@ThemedButton',theme);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

export default function App() {
  return (
    <HashRouter>
      <IconStyle/>
      <GlobalStyle/>
      {renderRoutes(routes)}
      <Toolbar/>
    </HashRouter>
   
  )
}