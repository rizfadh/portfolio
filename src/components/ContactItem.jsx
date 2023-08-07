export default function ContactItem({ Icon, link }) {
    return (
        <span className="display-1 me-4">
            <a href={link} target="_blank" rel="noopener noreferrer"><Icon/></a>
        </span>
    )
}