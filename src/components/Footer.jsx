import { FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CONSTANTS from '../global/constants'

export default function Footer({ accessToken, setAccessToken }) {
    const logoutHandler = (key) => {
        localStorage.removeItem(key)
        setAccessToken('')
    }

    return (
        <footer>
            <div className='container pt-4 pb-3'>
                <div className='text-center'>
                    <p className='m-0'>
                        Built with{' '}
                        <span className='text-primary'>
                            <FaReact className='fs-3' />{' '}
                            <FaBootstrap className='fs-3' />{' '}
                            <FaNodeJs className='fs-3' />
                        </span>{' '}
                        by Muhammad Rizky Fadhillah &copy; 2023
                    </p>
                    {accessToken ? (
                        <button
                            to='/login'
                            className='text-decoration-none border-0 bg-transparent'
                            onClick={() =>
                                logoutHandler(CONSTANTS.ACCESS_TOKEN_KEY)
                            }
                        >
                            <small className='text-body-secondary'>
                                Want to logout? click here
                            </small>
                        </button>
                    ) : (
                        <Link to='/login' className='text-decoration-none'>
                            <small className='text-body-secondary'>
                                You are Rizky? login here
                            </small>
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    )
}
