import { FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer({ accessToken }) {
    return (
        <footer>
            <div className='container pt-4 pb-3'>
                <div className='text-center'>
                    <p className='m-0'>
                        Built with <FaReact className='fs-3' />{' '}
                        <FaBootstrap className='fs-3' />{' '}
                        <FaNodeJs className='fs-3' /> by Muhammad Rizky
                        Fadhillah &copy; 2023
                    </p>
                    {accessToken ? null : (
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
