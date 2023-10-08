import { Link } from 'react-router-dom'
import { FaCalendar, FaUser } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'
import { id as idn } from 'date-fns/locale'

export default function DiaryItem({ id, title, desc, createdBy, updatedAt }) {
    return (
        <div className='col'>
            <div className='card bg-body-tertiary position-relative h-100 border-0 shadow-sm'>
                <div className='card-body'>
                    <p className='card-title fs-5 text-truncate'>{title}</p>
                    <p className='d-flex align-items-center card-text mb-2 text-body-secondary'>
                        <FaCalendar className='me-2' />
                        <small className='text-truncate'>
                            {format(parseISO(updatedAt), 'PPPPp', {
                                locale: idn,
                            })}
                        </small>
                    </p>
                    <p className='d-flex align-items-center card-text text-body-secondary'>
                        <FaUser className='me-2' />
                        <small className='text-truncate'>By {createdBy}</small>
                    </p>
                    <hr />
                    <p
                        className='card-text text-truncate-custom'
                        style={{ whiteSpace: 'pre-line' }}
                    >
                        {desc}
                    </p>
                </div>
                <Link to={`/diary/${id}`} className='stretched-link'></Link>
            </div>
        </div>
    )
}
