import SkillsItem from "./SkillsItem";

export default function SkillsList({ skills }) {
    return (
        <div className="row g-3 mt-4">
            {
                skills.map( skill =>
                    <SkillsItem key={skill.title} title={skill.title} Icon={skill.Icon} />
                )
            }
        </div>
    )
}