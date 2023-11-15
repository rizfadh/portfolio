import Title from '../components/Title'
import { FaPlusCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DiaryList from '../components/DiaryList'

export default function Dashboard() {
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
                    <DiaryList />
                </div>
            </section>
        </article>
    )
}
