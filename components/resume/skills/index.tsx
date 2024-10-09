import { SKILLS } from "@/constant";

export default function Skills() {
  return (
    <div>
      <h3 className="mb-3">기술</h3>
      <ul className="pl-4 font-medium list-disc">
        {SKILLS.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
