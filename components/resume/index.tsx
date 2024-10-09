import { VscMail, VscGithubInverted, VscCallIncoming } from "react-icons/vsc";
import Profile from "./profile";
import Introduce from "./introduce";
import Projects from "./projects";
import Skills from "./skills";

export default function Resume() {
  return (
    <main className="w-full max-w-[794px] my-0 mx-auto aspect-a4 p-6 flex flex-col gap-3 text-black">
      <section>
        <h1 className="mb-2">권주현</h1>
        <h2 className="mb-3 text-blue-500">Front-End Engineer</h2>
        <ul className="flex justify-between text-lg font-medium">
          <li className="flex items-center gap-2">
            <VscMail />
            kuum1797@gmail.com
          </li>
          <li className="flex items-center gap-2">
            <VscCallIncoming />
            010-6692-2773
          </li>
          <li className="flex items-center gap-2">
            <VscGithubInverted />
            <a
              href="https://github.com/kuum97"
              className="transition-colors hover:text-blue-500"
            >
              https://github.com/kuum97
            </a>
          </li>
        </ul>
      </section>
      <section className="grid grid-cols-3">
        <Profile />
        <Introduce />
      </section>
      <section className="grid grid-cols-3 gap-3">
        <Projects />
        <Skills />
      </section>
    </main>
  );
}
