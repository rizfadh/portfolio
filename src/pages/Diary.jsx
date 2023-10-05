import { useEffect, useState } from 'react'
import Title from '../components/Title'
import DiaryList from '../components/DiaryList'
import Loading from '../components/Loading'

function Diary() {
    const [diaries, setDiaries] = useState([])

    useEffect(() => {
        const getDiaries = async () => {
            const endpoint = import.meta.env.VITE_API_ENDPOINT
            const response = await fetch(`${endpoint}/diary`)
            const data = await response.json()
            setDiaries(data)
        }

        getDiaries()
    }, [])

    return (
        <>
            <header>
                <div className='container pt-5'>
                    <Title className='text-center text-lg-start'>
                        Rizky&apos;s{' '}
                        <span className='text-primary font-script fw-normal'>
                            Diary
                        </span>
                    </Title>
                    <p className='text-center text-lg-start'>
                        Step into my world of thoughts, emotions, and memories
                        through the pages of my personal diary.
                    </p>
                </div>
            </header>
            <article>
                <div className='container pb-5'>
                    {diaries.length === 0 ? (
                        <Loading className='text-center text-lg-start m-0 mt-4' />
                    ) : (
                        <DiaryList diaries={diaries} />
                    )}
                </div>
            </article>
        </>
    )
}

export default Diary
