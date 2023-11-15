import Head from './Head'
import Title from './Title'
import DiaryList from './DiaryList'

export default function DiaryCollection() {
    return (
        <>
            <Head
                title={`Rizky's Diary`}
                desc='Step into my world of thoughts, emotions, and memories through the pages of my personal diary.'
                imageURL='https://firebasestorage.googleapis.com/v0/b/portfolio-storage-aa107.appspot.com/o/images%2Frizky-icon.png?alt=media&token=d0309ac7-3ada-4e62-a43a-87246a5c6c87'
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
            <DiaryList />
        </>
    )
}
