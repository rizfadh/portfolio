export default function CertificatesItem({ imgUrl, title, from, issueDate, link }) {
    return (
        <div className="col">
            <div className="card h-100 position-relative border-0 shadow-sm">
                <div className="row h-100">
                    <div className="d-none d-lg-block col-lg-3">
                        <img src={imgUrl} className="img-fluid object-fit-cover h-100 rounded-start" alt={title}/>
                    </div>
                    <div className="col col-lg-9">
                        <div className="d-flex h-100 align-items-center">
                            <div className="card-body">
                                <p className="card-title fs-4">{title}</p>
                                <p className="card-text">{from} ({issueDate})</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href={link} className="stretched-link" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </div>
    )
}