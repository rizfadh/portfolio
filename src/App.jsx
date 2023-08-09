import { useEffect, useState } from "react"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import DarkModeButton from "./components/DarkModeButton"

function App() {

  const [darkTheme, setDarkTheme] = useState("light")
  const toggleDarkTheme = () => setDarkTheme( prev => prev === "light" ? "dark" : "light")

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", darkTheme)
  }, [darkTheme])

  return (
    <>
      <DarkModeButton darkModeValue={darkTheme} darkModeChange={toggleDarkTheme} />
      <Header/>
      <Body />
      <Footer/>
    </>
  )
}

export default App
