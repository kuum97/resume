import { PROJECTS } from "@/constant";

export default function Projects() {
  return (
    <div className="col-span-2 pr-3 border-r-2 border-blue-500">
      <h3 className="mb-3">프로젝트</h3>
      <ul className="flex flex-col-reverse gap-4">
        {PROJECTS.map(
          ({ id, name, contents, devPeriod, position, description, url }) => (
            <li key={id} className="grid grid-cols-3">
              <div className="col-span-3">
                <a
                  href={url}
                  className="text-xl font-medium transition-colors hover:text-blue-500"
                >
                  {name}
                </a>
                <p>{description}</p>
              </div>
              <div className="flex flex-col col-span-1">
                <p className="text-sm font-light text-slate-600">{devPeriod}</p>
                <p className="text-lg font-medium">{position}</p>
              </div>
              <ul className="col-span-2 pl-4 list-disc">
                {contents.map((content) => (
                  <li key={content} className="mb-1">
                    {content}
                  </li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
