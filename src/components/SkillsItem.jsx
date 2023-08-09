export default function SkillsItem({ title, Icon }) {
    return (
        <div className="col">
            <div className="card bg-primary border-0 shadow-sm p-3">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-light">
                        <span className="display-1"><Icon/></span>
                        <p className="card-title fs-5 mt-2">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}