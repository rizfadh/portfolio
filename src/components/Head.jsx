import { Helmet } from 'react-helmet-async'

function Head({ title, desc }) {
    return (
        <Helmet>
            <meta name='description' content={desc} />
            <meta property='og:url' content={window.location.href} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={desc} />
            <title>{title}</title>
        </Helmet>
    )
}

export default Head
