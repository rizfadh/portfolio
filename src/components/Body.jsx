import { projects, certificates } from "../assets/portfolioData.json"
import CertificatesList from "./CertificatesList"
import ProjectList from "./ProjectList"
import SkillsList from "./SkillsList"
import { skills } from "../assets/iconsData"

export default function Body() {

    return (
        <article>
            <div className="container py-5">
                <h2 className="display-5 fw-bolder text-center text-lg-start">Current <span className="text-primary">Skills</span></h2>
                <SkillsList skills={skills} />
                <h2 className="display-5 fw-bolder text-center text-lg-start mt-5">Interesting <span className="text-primary">Project</span></h2>
                <ProjectList projects={projects} />
                <h2 className="display-5 fw-bolder text-center text-lg-start mt-5">Current <span className="text-primary">Certificates</span></h2>
                <CertificatesList certificates={certificates} />
            </div>
        </article>
    )
}