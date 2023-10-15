import Title from './Title'
import { FaCalendar, FaEdit, FaTrash, FaUser } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'
import { id as idn } from 'date-fns/locale'
import { useQuery, useQueryClient } from 'react-query'
import { deleteDiaryAction, getDiaryQuery } from '../../utils/api'
import {
    Link,
    useNavigate,
    useOutletContext,
    useParams,
} from 'react-router-dom'
import Head from './Head'
import { SwalAlert } from '../../utils/alert'

function DiaryDetail() {
    const { id } = useParams()
    const { data } = useQuery(getDiaryQuery(id))
    const { imageName, imageURL, title, createdAt, createdBy, desc } = data.data
    const context = useOutletContext()
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const deleteDiaryHandler = ({
        id,
        imageName,
        accessToken,
        queryClient,
    }) => {
        SwalAlert({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            confirmButtonText: 'Delete',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await deleteDiaryAction({
                    id,
                    imageName,
                    accessToken,
                    queryClient,
                })
                if (response.error) {
                    SwalAlert({
                        title: response.title,
                        text: response.message,
                        icon: 'error',
                    })
                    return
                }
                SwalAlert({
                    title: 'Success',
                    text: 'Diary has been deleted!',
                    icon: 'success',
                }).then(() => navigate('/dashboard'))
            }
        })
    }

    return (
        <>
            <Head
                title={title}
                desc={`${desc
                    .replace(/[\r\n]+/gm, ' ')
                    .split(' ')
                    .slice(0, 20)
                    .join(' ')}...`}
            />
            <img
                src={imageURL}
                className='img-fluid w-100 rounded object-fit-cover mb-3'
                style={{ maxHeight: '20rem' }}
                alt={title}
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
            {context?.accessToken ? (
                <div className='d-inline-flex gap-2'>
                    <Link
                        to={`/edit/${id}`}
                        className='btn btn-primary d-inline-flex justify-content-center align-items-center gap-2'
                    >
                        Edit <FaEdit />
                    </Link>
                    <button
                        className='btn btn-primary d-inline-flex justify-content-center align-items-center gap-2'
                        onClick={() => {
                            const accessToken = context?.accessToken
                            deleteDiaryHandler({
                                id,
                                imageName,
                                accessToken,
                                queryClient,
                            })
                        }}
                    >
                        Delete <FaTrash />
                    </button>
                </div>
            ) : null}
            <hr />
            <p className='mb-0' style={{ whiteSpace: 'pre-line' }}>
                {desc}
            </p>
        </>
    )
}

export default DiaryDetail
