export default function SkillsItem({ title, Icon }) {
    return (
        <div className="col">
            <div className="card border-0 shadow p-3">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center">
                        <span className="display-1 text-primary"><Icon/></span>
                        <p className="card-title fs-4 mt-2">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}