import ContactItem from "./ContactItem"

export default function ContactList({ contacts }) {
    return(
        <div className="text-center text-lg-start">
            {
                contacts.map( contact => <ContactItem key={contact.link} link={contact.link} Icon={contact.Icon}/>)
            }
        </div>
    )
}