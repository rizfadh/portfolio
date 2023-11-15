import { Form } from 'react-router-dom'
import TextEditor from './TextEditor'
import { useState } from 'react'

function DiaryForm({ method, action, imageName, imageURL, title, desc }) {
    const [descValue, setDescValue] = useState(desc)

    return (
        <Form method={method} action={action} encType='multipart/form-data'>
            <input
                type='hidden'
                aria-hidden
                name='imageName'
                value={imageName}
            />
            <input type='hidden' aria-hidden name='imageURL' value={imageURL} />
            <div className='mb-3'>
                <label htmlFor='image' className='form-label'>
                    Image
                </label>
                <input
                    className='form-control'
                    type='file'
                    id='image'
                    name='image'
                    accept='.png, .jpg, .jpeg, .webp'
                    required={method === 'post' ? true : false}
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
                <textarea
                    hidden
                    aria-hidden
                    readOnly
                    name='desc'
                    value={descValue}
                />
                <label className='form-label'>Description</label>
                <TextEditor value={descValue} setValue={setDescValue} />
            </div>
            <button type='submit' className='btn btn-primary w-100'>
                Submit
            </button>
        </Form>
    )
}

export default DiaryForm
