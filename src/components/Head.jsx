import { Helmet } from 'react-helmet-async'

function Head({ title, desc, imageURL }) {
    return (
        <Helmet>
            <meta name='description' content={desc} />
            <meta property='og:url' content={window.location.href} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={desc} />
            <meta property='og:image' content={imageURL} />
            <meta property='og:image:alt' content="Rizky's photo" />
            <title>{title}</title>
        </Helmet>
    )
}

export default Head
