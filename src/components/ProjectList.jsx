import ProjectItem from "./ProjectItem"

export default function ProjectList({ projects }) {
    return (
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
    )
}