import { contacts, skills } from '../assets/aboutData'
import ContactList from '../components/ContactList'
import ProjectList from '../components/ProjectList'
import SkillsList from '../components/SkillsList'
import Title from '../components/Title'
import { projects, certificates } from '../assets/portfolioData'
import CertificatesList from '../components/CertificatesList'
import Head from '../components/Head'
import imgAvatar from '../assets/img/avatar.webp'

function Portfolio() {
    return (
        <>
            <Head
                title={`Rizky's Portfolio`}
                desc='Visit this website if you wanna know more about me'
                imageURL='https://firebasestorage.googleapis.com/v0/b/portfolio-storage-aa107.appspot.com/o/images%2Frizky-icon.png?alt=media&token=d0309ac7-3ada-4e62-a43a-87246a5c6c87'
            />
            <article>
                <section className='mb-5'>
                    <div className='container'>
                        <div className='row row-cols-1 row-cols-lg-2 align-items-center'>
                            <div className='col text-center text-lg-end order-lg-1 p-4'>
                                <img
                                    src={imgAvatar}
                                    className='avatar-image-height image-skeleton rounded-circle'
                                    loading='lazy'
                                    alt='avatar'
                                />
                            </div>
                            <div className='col order-lg-0'>
                                <h1 className='display-2 fw-bolder text-center text-lg-start'>
                                    Hello I&apos;m{' '}
                                    <span className='text-primary font-script fw-normal'>
                                        Rizky
                                    </span>
                                </h1>
                                <p className='lead text-center text-lg-start'>
                                    <small>
                                        Android and Front-End Web Developer
                                    </small>
                                </p>
                                <p className='lh-lg'>
                                    I am a student majoring in Informatics
                                    Engineering at Pancasila University. I have
                                    a solid foundation in design and
                                    programming. I have experience developing
                                    front-end websites using React, and Android
                                    applications using Android Studio and
                                    Kotlin. In addition, I also mastered the
                                    skills to create digital designs using Adobe
                                    Illustrator, manipulate and edit photos
                                    using Adobe Photoshop, and create user
                                    interfaces using Adobe XD and Figma.
                                </p>
                                <ContactList contacts={contacts} />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <Title type='h2' className='text-center text-lg-start'>
                            Current{' '}
                            <span className='text-primary font-script fw-normal'>
                                Skills
                            </span>
                        </Title>
                        <SkillsList skills={skills} />
                        <Title
                            type='h2'
                            className='mt-5 text-center text-lg-start'
                        >
                            Interesting{' '}
                            <span className='text-primary font-script fw-normal'>
                                Project
                            </span>
                        </Title>
                        <ProjectList projects={projects} />
                        <Title
                            type='h2'
                            className='mt-5 text-center text-lg-start'
                        >
                            Current{' '}
                            <span className='text-primary font-script fw-normal'>
                                Certificates
                            </span>
                        </Title>
                        <CertificatesList certificates={certificates} />
                    </div>
                </section>
            </article>
        </>
    )
}

export default Portfolio
