export default function ContactItem({ Icon, link }) {
    return (
        <span className="display-1 mx-3 mx-lg-0 me-lg-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary"><Icon/></a>
        </span>
    )
}