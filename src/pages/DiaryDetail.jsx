import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import Title from '../components/Title'
import { useEffect, useState } from 'react'
import showFormattedDate from '../../utils/dateUtil'
import { FaCalendar, FaUser } from 'react-icons/fa'

function DiaryDetail() {
    const { id } = useParams()
    const [diary, setDiary] = useState({})

    useEffect(() => {
        const getDiary = async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT
            const response = await fetch(`${endpoint}/diary/${id}`)
            const data = await response.json()
            setDiary(data)
        }

        getDiary()
    }, [id])

    if (Object.keys(diary).length == 0)
        return (
            <div className='container'>
                <Loading className='m-0 mt-5' />
            </div>
        )

    return (
        <>
            <header>
                <div className='container pt-5'>
                    <Title className='mb-3'>{diary.title}</Title>
                    <p className='mb-2 d-flex align-items-center text-body-secondary'>
                        <FaCalendar className='me-2' />
                        <small>{showFormattedDate(diary.createdAt)}</small>
                    </p>
                    <p className='d-flex align-items-center text-body-secondary'>
                        <FaUser className='me-2' />
                        <small>By {diary.createdBy}</small>
                    </p>
                </div>
            </header>
            <article>
                <div className='container pb-5'>
                    <p>{diary.desc}</p>
                </div>
            </article>
        </>
    )
}

export default DiaryDetail
