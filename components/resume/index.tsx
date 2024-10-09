import Introduce from "./introduce";
import Profile from "./profile";
import { VscMail, VscGithubInverted, VscCallIncoming } from "react-icons/vsc";

export default function Resume() {
  return (
    <main className="w-full max-w-[794px] aspect-a4 p-6">
      <section className="flex flex-col gap-3 mb-3">
        <h1>권주현</h1>
        <h2 className="text-blue-500">Front-End Engineer</h2>
      </section>
      <section>
        <ul className="flex justify-between mb-3 text-lg font-medium">
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
      <section className="flex items-center">
        <Profile />
        <Introduce />
      </section>
    </main>
  );
}
