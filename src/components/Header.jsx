import ContactList from "./ContactList";
import { contacts } from "../assets/iconsData";

export default function Header() {

    return (
        <header>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-lg-2 align-items-center">
                    <div className="col text-center text-lg-end order-lg-1">
                        <img src="/avatar.png" className="img-fluid p-5" />
                    </div>
                    <div className="col order-lg-0">
                        <p className="display-2 fw-bolder text-center text-lg-start">Hello I&apos;m <span className="text-primary">Rizky</span></p>
                        <p className="lead text-center text-lg-start">Android and Front-End Web Developer</p>
                        <p className="lh-lg">I am a student majoring in Informatics Engineering at Pancasila University. I have a solid foundation in design and programming. I have experience developing front-end websites using React, and Android applications using Android Studio and Kotlin. In addition, I also mastered the skills to create digital designs using Adobe Illustrator, manipulate and edit photos using Adobe Photoshop, and create user interfaces using Adobe XD and Figma.</p>
                        <ContactList contacts={contacts}/>
                    </div>
                </div>
            </div>
        </header>
    )
}