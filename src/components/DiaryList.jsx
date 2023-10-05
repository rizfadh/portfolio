import DiaryItem from './DiaryItem'

export default function DiaryList({ diaries }) {
    return (
        <div className='row row-cols-1 row-cols-lg-3 g-3 mt-4'>
            {diaries.map((diary) => (
                <DiaryItem
                    key={diary._id}
                    id={diary._id}
                    title={diary.title}
                    desc={diary.desc}
                    createdBy={diary.createdBy}
                    createdAt={diary.createdAt}
                />
            ))}
        </div>
    )
}
