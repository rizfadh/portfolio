import { Form } from 'react-router-dom'
import Title from '../components/Title'
import { MdMail, MdPassword } from 'react-icons/md'

function Login() {
    return (
        <article>
            <section>
                <div className='container py-5'>
                    <div className='row row-cols-1 row-cols-lg-2 px-lg-5'>
                        <div className='col d-flex flex-column justify-content-center align-items-start align-items-lg-center mb-3 mb-lg-0'>
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
    )
}

export default Login
