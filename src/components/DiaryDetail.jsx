import Title from './Title'
import { FaCalendar, FaUser } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'
import { id as idn } from 'date-fns/locale'
import { useQuery } from 'react-query'
import { getDiaryQuery } from '../../utils/api'
import { useParams } from 'react-router-dom'
import Head from './Head'

function DiaryDetail() {
    const { id } = useParams()
    const { data } = useQuery(getDiaryQuery(id))
    const { title, createdAt, createdBy, desc } = data.data

    return (
        <>
            <Head
                title={title}
                desc={`${desc.split(' ').slice(0, 10).join(' ')}...`}
            />
            <Title className='mb-3'>{title}</Title>
            <p className='mb-2 d-flex align-items-center text-body-secondary'>
                <FaCalendar className='me-2' />
                <small className='text-truncate'>
                    {format(parseISO(createdAt), 'PPPPp', { locale: idn })}
                </small>
            </p>
            <p className='d-flex align-items-center text-body-secondary'>
                <FaUser className='me-2' />
                <small className='text-truncate'>By {createdBy}</small>
            </p>
            <hr />
            <p className='mb-0' style={{ whiteSpace: 'pre-line' }}>
                {desc}
            </p>
        </>
    )
}

export default DiaryDetail
