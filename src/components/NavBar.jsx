import { FaSun, FaMoon } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NavBar({ darkModeValue, darkModeChange }) {
    return (
        <nav className='navbar navbar-expand-lg sticky-top py-3'>
            <div className='container'>
                <div className='d-flex flex-wrap justify-content-between w-100 px-3 py-2 bg-body-tertiary rounded shadow-sm'>
                    <h1 className='navbar-brand fs-4 m-0 font-script text-primary'>
                        Rizky&apos;s Portfolio
                    </h1>
                    <button
                        className='navbar-toggler border-0'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav ms-lg-5 me-auto mb-2 mb-lg-0 align-items-center'>
                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>
                                    Portfolio
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/diary' className='nav-link'>
                                    Diary
                                </Link>
                            </li>
                        </ul>
                        <button
                            type='button'
                            className='d-flex btn fs-3 text-primary border-0 mx-auto mx-lg-0'
                            onClick={darkModeChange}
                        >
                            {darkModeValue === 'light' ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
