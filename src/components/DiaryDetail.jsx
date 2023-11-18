import Title from './Title'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { IoShareOutline } from 'react-icons/io5'
import { format, parseISO } from 'date-fns'
import { id as idn } from 'date-fns/locale'
import { useQuery, useQueryClient } from 'react-query'
import parse from 'html-react-parser'
import { deleteDiaryAction, getDiaryQuery } from '../../utils/api'
import {
    Link,
    useNavigate,
    useOutletContext,
    useParams,
} from 'react-router-dom'
import Head from './Head'
import { SwalAlert } from '../../utils/alert'
import {
    getDescriptionString,
    getReadingTime,
    shareArticle,
} from '../../utils/local'
import '../css/content-styles.css'

function DiaryDetail() {
    const { id } = useParams()
    const { data } = useQuery(getDiaryQuery(id))
    const { imageName, imageURL, title, createdAt, createdBy, desc } = data.data
    const context = useOutletContext()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const linkDesc = getDescriptionString(desc, 30)

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
        <div className='d-flex justify-content-center'>
            <div className='article-width'>
                <Head title={title} desc={linkDesc} imageURL={imageURL} />
                <img
                    src={imageURL}
                    className='w-100 rounded object-fit-cover mb-3 article-image-height image-skeleton shadow-sm'
                    loading='lazy'
                    alt={title}
                />
                <Title>{title}</Title>

                {context?.accessToken ? (
                    <div className='d-inline-flex gap-2 my-3'>
                        <Link
                            to={`/edit/${id}`}
                            className='btn btn-primary d-inline-flex justify-content-center align-items-center gap-2'
                        >
                            Edit <FaEdit />
                        </Link>
                        <button
                            className='btn btn-primary d-inline-flex justify-content-center align-items-center gap-2'
                            aria-label='Delete diary'
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
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                        <p className='d-flex align-items-center text-body-secondary mb-0 fw-bold'>
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
                    <button
                        className='btn fs-3 d-flex justify-content-center align-items-center p-0 text-secondary'
                        aria-label='Share article'
                        title='Share article'
                        onClick={() => {
                            const url = window.location.href
                            shareArticle({
                                title: title,
                                text: linkDesc,
                                url: url,
                            })
                        }}
                    >
                        <IoShareOutline />
                    </button>
                </div>
                <hr className='border border-light-subtle opacity-50' />
                <div className='mb-0 ck-content'>{parse(desc)}</div>
            </div>
        </div>
    )
}

export default DiaryDetail
