export default function ProjectItem({ imgUrl, title, body, link }) {
    return (
        <div className='col'>
            <div className='card bg-body-tertiary position-relative h-100 border-0 shadow-sm'>
                <img
                    src={imgUrl}
                    className='card-img-top card-image-height image-skeleton object-fit-cover'
                    loading='lazy'
                    alt={title}
                />
                <div className='card-body'>
                    <p className='card-title fs-5 fw-bold'>{title}</p>
                    <p className='card-text'>{body}</p>
                    <a
                        href={link}
                        className='stretched-link'
                        target='_blank'
                        rel='noopener noreferrer'
                    ></a>
                </div>
            </div>
        </div>
    )
}
