import CertificatesItem from "./CertificatesItem";

export default function CertificatesList({ certificates }) {
    return (
        <div className="row row-cols-1 row-cols-lg-2 g-3 mt-4">
            {
                certificates.map( certificate =>
                    <CertificatesItem
                        key={certificate.title}
                        imgUrl={certificate.imgUrl}
                        title={certificate.title}
                        from={certificate.from}
                        issueDate={certificate.issueDate}
                        link={certificate.link}
                    />
                )
            }
        </div>
    )
}