import Head from '../components/Head'
import Title from '../components/Title'

function NotFound() {
    return (
        <>
            <Head
                title='Page Not Found'
                desc='Sorry, the page you are requesting is not available'
                imageURL='https://rizfadh.netlify.app/icon/300x300.png'
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
