import { useEffect } from 'react'
import { useActionData, useNavigate, useParams } from 'react-router-dom'
import DiaryForm from '../components/DiaryForm'
import Title from '../components/Title'
import { useQuery } from 'react-query'
import { getDiaryQuery } from '../../utils/api'
import { SwalAlert } from '../../utils/alert'

function EditDiary() {
    const { id } = useParams()
    const { data: diary } = useQuery(getDiaryQuery(id))
    const { title, desc } = diary.data
    const data = useActionData()
    const navigate = useNavigate()

    useEffect(() => {
        if (data?.error)
            SwalAlert({
                title: data.title,
                text: data.message,
                icon: 'error',
            })
        if (data?.data) {
            SwalAlert({
                title: 'Success',
                text: 'Diary has been edited',
                icon: 'success',
            }).then(() => navigate(`/diary/${id}`, { replace: true }))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (
        <article>
            <section>
                <div className='container'>
                    <Title className='text-center text-lg-start mb-4'>
                        Edit{' '}
                        <span className='text-primary font-script fw-normal'>
                            Diary
                        </span>
                    </Title>
                    <DiaryForm
                        method='put'
                        action={`/edit/${id}`}
                        title={title}
                        desc={desc}
                    />
                </div>
            </section>
        </article>
    )
}

export default EditDiary
