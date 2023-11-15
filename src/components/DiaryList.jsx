import DiaryItem from './DiaryItem'
import { useQuery } from 'react-query'
import { getDiariesQuery } from '../../utils/api'

export default function DiaryList() {
    const { data } = useQuery(getDiariesQuery())
    const { data: diaries } = data

    return (
        <div className='row row-cols-1 row-cols-lg-3 g-3 mt-4'>
            {diaries.map((diary) => (
                <DiaryItem
                    key={diary._id}
                    id={diary._id}
                    imageURL={diary.imageURL}
                    title={diary.title}
                    createdBy={diary.createdBy}
                    createdAt={diary.createdAt}
                />
            ))}
        </div>
    )
}
