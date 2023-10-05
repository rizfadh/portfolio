import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Diary from './pages/Diary'
import DiaryDetail from './pages/DiaryDetail'

function App() {
    const DARK_THEME_KEY = 'darkTheme'
    const [darkTheme, setDarkTheme] = useState(
        () => localStorage.getItem(DARK_THEME_KEY) || 'light'
    )

    const toggleDarkTheme = () => {
        setDarkTheme((prev) => {
            const theme = prev === 'light' ? 'dark' : 'light'
            localStorage.setItem(DARK_THEME_KEY, theme)
            return theme
        })
    }

    useEffect(() => {
        document.body.setAttribute('data-bs-theme', darkTheme)
    }, [darkTheme])

    return (
        <>
            <NavBar
                darkModeValue={darkTheme}
                darkModeChange={toggleDarkTheme}
            />

            <Routes>
                <Route path='/' element={<Portfolio />} />
                <Route path='/diary' element={<Diary />} />
                <Route path='/diary/:id' element={<DiaryDetail />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
