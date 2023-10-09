import { Outlet, useNavigation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import CONSTANTS from '../global/constants'
import { getAccessToken } from '../../utils/local'
import { SwalAlert } from '../../utils/alert'
import { info } from 'sass'

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
    state === 'loading'
        ? SwalAlert({
              title: 'Loading',
              text: 'Please wait a moment',
              icon: 'info',
              allowOutsideClick: false,
              showConfirmButton: false,
          })
        : Swal.close()

    const [accessToken, setAccessToken] = useState(
        () => getAccessToken(CONSTANTS.ACCESS_TOKEN_KEY) || ''
    )
    return (
        <>
            <div className='d-flex flex-column justify-content-between min-vh-100'>
                <NavBar
                    accessToken={accessToken}
                    darkModeValue={darkTheme}
                    darkModeChange={toggleDarkTheme}
                />
                <main>
                    <Outlet context={{ accessToken, setAccessToken }} />
                </main>

                <Footer
                    accessToken={accessToken}
                    setAccessToken={setAccessToken}
                />
            </div>
        </>
    )
}

export default Root
