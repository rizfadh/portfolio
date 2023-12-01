import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import CONSTANTS from '../global/constants'
import { getAccessToken } from '../utils/local'
import { BarLoader } from 'react-spinners'

function Root() {
    const DARK_THEME_KEY = CONSTANTS.DARK_THEME_KEY
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

    const { state } = useNavigation()

    const [accessToken, setAccessToken] = useState(
        () => getAccessToken(CONSTANTS.ACCESS_TOKEN_KEY) || ''
    )
    return (
        <div className='d-flex flex-column justify-content-between min-vh-100'>
            <BarLoader
                className='position-fixed w-100 z-3'
                color='#0d6efd'
                loading={state === 'loading' ? true : false}
            />

            <NavBar
                accessToken={accessToken}
                darkModeValue={darkTheme}
                darkModeChange={toggleDarkTheme}
            />
            <main>
                <Outlet context={{ accessToken, setAccessToken }} />
            </main>

            <Footer accessToken={accessToken} setAccessToken={setAccessToken} />
            <ScrollRestoration getKey={(location) => location.pathname} />
        </div>
    )
}

export default Root
