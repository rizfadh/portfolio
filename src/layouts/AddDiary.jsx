import { useEffect } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'
import DiaryForm from '../components/DiaryForm'
import Title from '../components/Title'
import { SwalAlert } from '../../utils/alert'

function AddDiary() {
    const data = useActionData()
    const navigate = useNavigate()

    useEffect(() => {
        if (data?.error)
            SwalAlert({ title: data.title, text: data.message, icon: 'error' })
        if (data?.data) {
            SwalAlert({
                title: 'Success',
                text: 'Diary has been added',
                icon: 'success',
            }).then(() => navigate('/dashboard', { replace: true }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <article>
            <section>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        <div className='article-width'>
                            <Title className='text-center text-lg-start mb-4'>
                                Add{' '}
                                <span className='text-primary font-script fw-normal'>
                                    New Diary
                                </span>
                            </Title>
                            <DiaryForm method='post' action='/add' />
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default AddDiary
