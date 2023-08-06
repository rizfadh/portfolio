import projects from "../assets/projects.json"
import ProjectItem from "./ProjectItem"

export default function Body() {

    return (
        <article>
            <div className="container py-5">
                <h2 className="display-3 fw-bolder text-center text-lg-start">My <span className="text-primary">Latest</span> Project</h2>
                <div className="row row-cols-1 row-cols-lg-3 g-3 mt-4">
                    {
                        projects.map(project => 
                            <ProjectItem
                                key={project.title}
                                imgUrl={project.imgUrl}
                                title={project.title}
                                body={project.body}
                                link={project.link}
                            />
                        )
                    }
                </div>
            </div>
        </article>
    )
}