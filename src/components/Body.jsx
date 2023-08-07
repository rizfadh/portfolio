import { projects, certificates } from "../assets/portfolioData.json"
import CertificatesList from "./CertificatesList"
import ProjectList from "./ProjectList"
import SkillsList from "./SkillsList"
import { skills } from "../assets/iconsData"

export default function Body() {

    return (
        <article>
            <div className="container py-5">
                <h2 className="display-4 fw-bolder text-center text-lg-start">My <span className="text-primary">Interesting</span> Project</h2>
                <ProjectList projects={projects} />
                <h2 className="display-4 fw-bolder text-center text-lg-start mt-5">My Current <span className="text-primary">Certificates</span></h2>
                <CertificatesList certificates={certificates} />
                <h2 className="display-4 fw-bolder text-center text-lg-start mt-5">My Current <span className="text-primary">Skills</span></h2>
                <SkillsList skills={skills} />
            </div>
        </article>
    )
}