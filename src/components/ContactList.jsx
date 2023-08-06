import ContactItem from "./ContactItem"

export default function ContactList({ contacts }) {
    return(
        <>
            {
                contacts.map( contact => <ContactItem key={contact.link} link={contact.link} Icon={contact.Icon}/>)
            }
        </>
    )
}