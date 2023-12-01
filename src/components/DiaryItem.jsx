import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import { id as idn } from 'date-fns/locale'
import { getReadingTime } from '../utils/local'

export default function DiaryItem({
    id,
    imageURL,
    title,
    desc,
    createdBy,
    createdAt,
}) {
    return (
        <div className='col'>
            <div className='card bg-body-tertiary position-relative h-100 border-0 shadow-sm'>
                <img
                    src={imageURL}
                    className='card-img-top object-fit-cover card-image-height image-skeleton'
                    loading='lazy'
                    alt={title}
                />
                <div className='card-body'>
                    <p className='card-title fs-5 text-truncate fw-bold'>
                        {title}
                    </p>
                    <div>
                        <p className='d-flex align-items-center text-body-secondary mb-0'>
                            <small className='text-truncate'>{createdBy}</small>
                        </p>
                        <p className='d-inline-flex justify-content-center align-items-center text-body-secondary mb-0'>
                            <small className='text-truncate'>
                                {format(parseISO(createdAt), 'PPp', {
                                    locale: idn,
                                })}
                                <span className='px-2'>·</span>
                                {`${getReadingTime(desc)} min read`}
                            </small>
                        </p>
                    </div>
                </div>
                <Link to={`/diary/${id}`} className='stretched-link'></Link>
            </div>
        </div>
    )
}
