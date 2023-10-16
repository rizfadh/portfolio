import Head from '../components/Head'
import Title from '../components/Title'

function NotFound() {
    return (
        <>
            <Head
                title='Page Not Found'
                desc='Sorry, the page you are requesting is not available'
                imageURL='https://firebasestorage.googleapis.com/v0/b/portfolio-storage-aa107.appspot.com/o/images%2Frizky-icon.png?alt=media&token=d0309ac7-3ada-4e62-a43a-87246a5c6c87'
            />
            <article>
                <section>
                    <div className='container py-5'>
                        <Title className='text-center'>
                            Page{' '}
                            <span className='text-primary font-script fw-normal'>
                                Not Found
                            </span>
                        </Title>
                        <p className='text-center'>
                            Sorry, the page you are requesting is not available
                        </p>
                    </div>
                </section>
            </article>
        </>
    )
}

export default NotFound
