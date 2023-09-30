import { projects, certificates } from "../assets/portfolioData.json"
import CertificatesList from "./CertificatesList"
import ProjectList from "./ProjectList"
import SkillsList from "./SkillsList"
import { skills } from "../assets/aboutData"
import Title from "./Title"

export default function Body() {

    return (
        <article>
            <div className="container py-5">
                <Title>Current <span className="text-primary font-script fw-normal">Skills</span></Title>
                <SkillsList skills={skills} />
                <Title className="mt-5">Interesting <span className="text-primary font-script fw-normal">Project</span></Title>
                <ProjectList projects={projects} />
                <Title className="mt-5">Current <span className="text-primary font-script fw-normal">Certificates</span></Title>
                <CertificatesList certificates={certificates} />
            </div>
        </article>
    )
}