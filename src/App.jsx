import { useEffect, useState } from "react"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavBar from "./components/NavBar"

function App() {

  const DARK_THEME_KEY = 'darkTheme'
  const [darkTheme, setDarkTheme] = useState(() => localStorage.getItem(DARK_THEME_KEY) || 'light')
  
  const toggleDarkTheme = () => {
    setDarkTheme( prev => {
        const theme = prev === "light" ? "dark" : "light"
        localStorage.setItem(DARK_THEME_KEY, theme)
        return theme
    })
  }

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", darkTheme)
  }, [darkTheme])

  return (
    <>
      <NavBar darkModeValue={darkTheme} darkModeChange={toggleDarkTheme} />
      <Header/>
      <Body />
      <Footer/>
    </>
  )
}

export default App
