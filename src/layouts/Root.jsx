import { Outlet, useNavigation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function Root() {
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

    const { state } = useNavigation()
    state === 'loading'
        ? Swal.fire({
              title: 'Loading',
              text: 'Please wait',
              icon: 'info',
              allowOutsideClick: false,
              showConfirmButton: false,
          })
        : Swal.close()

    return (
        <>
            <NavBar
                darkModeValue={darkTheme}
                darkModeChange={toggleDarkTheme}
            />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Root
