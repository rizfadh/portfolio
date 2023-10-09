import {
    Form,
    useActionData,
    useNavigate,
    useOutletContext,
} from 'react-router-dom'
import Title from '../components/Title'
import { MdMail, MdPassword } from 'react-icons/md'
import { setAccessToken } from '../../utils/local'
import CONSTANTS from '../global/constants'
import { useEffect } from 'react'
import Head from '../components/Head'
import { SwalAlert } from '../../utils/alert'

function Login() {
    const data = useActionData()
    const { accessToken, setAccessToken: setToken } = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (accessToken) navigate('/dashboard', { replace: true })
        if (data?.error)
            SwalAlert({ title: data.title, text: data.message, icon: 'error' })
        if (data?.data) {
            const token = data.data.accessToken
            setAccessToken(CONSTANTS.ACCESS_TOKEN_KEY, token)
            setToken(token)
            navigate('/dashboard', { replace: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <>
            <Head title={`Rizky's Login`} desc='Login if you are Rizky' />
            <article>
                <section>
                    <div className='container py-5'>
                        <div className='row row-cols-1 row-cols-lg-2 px-lg-5'>
                            <div className='col d-flex flex-column justify-content-center align-items-center mb-3 mb-lg-0'>
                                <Title>
                                    Rizky&apos;s{' '}
                                    <span className='font-script text-primary'>
                                        Login
                                    </span>
                                </Title>
                                <p>Login if you are Rizky</p>
                            </div>
                            <div className='col'>
                                <Form method='post' action='/login'>
                                    <div className='input-group mb-3'>
                                        <span
                                            className='input-group-text'
                                            id='email-addon'
                                        >
                                            <MdMail />
                                        </span>
                                        <input
                                            type='email'
                                            className='form-control'
                                            id='email'
                                            name='email'
                                            aria-label='Email'
                                            aria-describedby='email-addon'
                                            placeholder='Email'
                                            required
                                        />
                                    </div>
                                    <div className='input-group mb-3'>
                                        <span
                                            className='input-group-text'
                                            id='password-addon'
                                        >
                                            <MdPassword />
                                        </span>
                                        <input
                                            type='password'
                                            className='form-control'
                                            id='password'
                                            name='password'
                                            aria-label='Password'
                                            aria-describedby='password-addon'
                                            placeholder='Password'
                                            required
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        className='btn btn-primary w-100'
                                    >
                                        Submit
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    )
}

export default Login
