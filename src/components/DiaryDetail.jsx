import { useLoaderData } from 'react-router-dom'
import Title from './Title'
import { FaCalendar, FaUser } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'

function DiaryDetail() {
    const { title, createdAt, createdBy, desc } = useLoaderData()

    return (
        <>
            <Title className='mb-3'>{title}</Title>
            <p className='mb-2 d-flex align-items-center text-body-secondary'>
                <FaCalendar className='me-2' />
                <small className='text-truncate'>
                    {format(parseISO(createdAt), 'PPPPp')}
                </small>
            </p>
            <p className='d-flex align-items-center text-body-secondary'>
                <FaUser className='me-2' />
                <small className='text-truncate'>By {createdBy}</small>
            </p>
            <p>{desc}</p>
        </>
    )
}

export default DiaryDetail
