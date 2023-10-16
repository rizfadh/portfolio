import DiaryItem from './DiaryItem'
import Title from './Title'
import { useQuery } from 'react-query'
import { getDiariesQuery } from '../../utils/api'
import Head from './Head'

export default function DiaryList() {
    const { data } = useQuery(getDiariesQuery())
    const { data: diaries } = data

    return (
        <>
            <Head
                title={`Rizky's Diary`}
                desc='Step into my world of thoughts, emotions, and memories through the pages of my personal diary.'
                imageURL='https://rizfadh.netlify.app/icon/300x300.png'
            />
            <Title className='text-center text-lg-start'>
                Rizky&apos;s{' '}
                <span className='text-primary font-script fw-normal'>
                    Diary
                </span>
            </Title>
            <p className='text-center text-lg-start'>
                Step into my world of thoughts, emotions, and memories through
                the pages of my personal diary.
            </p>
            <div className='row row-cols-1 row-cols-lg-3 g-3 mt-4'>
                {diaries.map((diary) => (
                    <DiaryItem
                        key={diary._id}
                        id={diary._id}
                        imageURL={diary.imageURL}
                        title={diary.title}
                        createdBy={diary.createdBy}
                        updatedAt={diary.updatedAt}
                    />
                ))}
            </div>
        </>
    )
}
