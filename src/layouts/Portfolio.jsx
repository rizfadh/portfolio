import { contacts, skills } from '../assets/aboutData'
import ContactList from '../components/ContactList'
import ProjectList from '../components/ProjectList'
import SkillsList from '../components/SkillsList'
import Title from '../components/Title'
import { projects, certificates } from '../assets/portfolioData.json'
import CertificatesList from '../components/CertificatesList'
import Head from '../components/Head'

function Portfolio() {
    return (
        <>
            <Head
                title={`Rizky's Portfolio`}
                desc='Visit this website if you wanna know more about me'
                imageURL='https://rizfadh.netlify.app/icon/300x300.png'
            />
            <article>
                <section className='mb-5'>
                    <div className='container'>
                        <div className='row row-cols-1 row-cols-lg-2 align-items-center'>
                            <div className='col text-center text-lg-end order-lg-1'>
                                <img
                                    src='/img/avatar.svg'
                                    className='img-fluid p-5'
                                    alt='avatar'
                                />
                            </div>
                            <div className='col order-lg-0'>
                                <h2 className='display-2 fw-bolder text-center text-lg-start'>
                                    Hello I&apos;m{' '}
                                    <span className='text-primary font-script fw-normal'>
                                        Rizky
                                    </span>
                                </h2>
                                <p className='lead text-center text-lg-start'>
                                    Android and Front-End Web Developer
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
                        <Title className='text-center text-lg-start'>
                            Current{' '}
                            <span className='text-primary font-script fw-normal'>
                                Skills
                            </span>
                        </Title>
                        <SkillsList skills={skills} />
                        <Title className='mt-5 text-center text-lg-start'>
                            Interesting{' '}
                            <span className='text-primary font-script fw-normal'>
                                Project
                            </span>
                        </Title>
                        <ProjectList projects={projects} />
                        <Title className='mt-5 text-center text-lg-start'>
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
