import { Form } from 'react-router-dom'

function DiaryForm({ method, action, title, desc }) {
    return (
        <Form method={method} action={action} encType='multipart/form-data'>
            <div className='mb-3'>
                <label htmlFor='image' className='form-label'>
                    Choose image
                </label>
                <input
                    className='form-control'
                    type='file'
                    id='image'
                    name='image'
                    accept='.png, .jpg, .jpeg, .webp'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='title' className='form-label'>
                    Title
                </label>
                <input
                    type='text'
                    className='form-control'
                    id='title'
                    name='title'
                    defaultValue={title}
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
                    defaultValue={desc}
                    required
                ></textarea>
            </div>
            <button type='submit' className='btn btn-primary w-100'>
                Submit
            </button>
        </Form>
    )
}

export default DiaryForm
