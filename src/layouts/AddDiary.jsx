import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function AddDiary() {
    const data = useActionData()
    const navigate = useNavigate()

    useEffect(() => {
        if (data?.error) Swal.fire(data.title, data.message, 'error')
        if (data?.data) navigate('/dashboard', { replace: true })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <article>
            <section>
                <div className='container'>
                    <Form method='post' action='/add'>
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>
                                Title
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='title'
                                name='title'
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='desc' className='form-label'>
                                Description
                            </label>
                            <textarea
                                className='form-control'
                                id='desc'
                                rows='10'
                                name='desc'
                                required
                            ></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary w-100'>
                            Submit
                        </button>
                    </Form>
                </div>
            </section>
        </article>
    )
}

export default AddDiary
