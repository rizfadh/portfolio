import { useQuery } from 'react-query'
import { getDiariesQuery } from '../../utils/api'
import DiaryItem from '../components/DiaryItem'
import Title from '../components/Title'
import { FaPlusCircle } from 'react-icons/fa'
import { Link, useOutletContext } from 'react-router-dom'

function Dashboard() {
    const { data } = useQuery(getDiariesQuery())
    const { data: diaries } = data

    return (
        <article>
            <section>
                <div className='container'>
                    <Title className='text-center text-lg-start'>
                        Rizky&apos;s{' '}
                        <span className='text-primary font-script fw-normal'>
                            Dashboard
                        </span>
                    </Title>
                    <div className='mt-4 text-center text-lg-start'>
                        <Link to='/add' className='text-decoration-none'>
                            <FaPlusCircle className='display-2 text-primary bg-body-tertiary rounded-pill shadow-sm' />
                        </Link>
                    </div>
                    <div className='row row-cols-1 row-cols-lg-3 g-3 mt-4'>
                        {diaries.map((diary) => (
                            <DiaryItem
                                key={diary._id}
                                id={diary._id}
                                imageURL={diary.imageURL}
                                title={diary.title}
                                desc={diary.desc}
                                createdBy={diary.createdBy}
                                updatedAt={diary.updatedAt}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Dashboard
