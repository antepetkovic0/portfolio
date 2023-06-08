import ExperienceCard from "@/components/cards/ExperienceCard";
import Icon from "@/components/icon/Icon";
import TagList from "@/components/tags/TagList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:w-1/2">
          <>
            <h1 className="text-4xl text-slate-200 font-bold">Ante Petkovic</h1>
            <h2 className="text-lg text-slate-200 font-medium mt-2">
              Software engineer @ Evolutio
            </h2>
            <p className="mt-2">Love turning vision into reality with code</p>
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#about"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      About
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3 "
                    href="#experience"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Experience
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3 " href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Projects
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3 " href="#articles">
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      Articles
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </>
          <ul className="mt-8 flex gap-4">
            <li>
              <a
                href="https://github.com/antepetkovic0"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/antepetkovic0"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" />
              </a>
            </li>
          </ul>
          <div>
            <a
              href=""
              className="flex gap-1 text-slate-200 w-fit px-2 py-1 border-2 border-teal-300"
            >
              <Icon name="file-download" />
              <span>Resume</span>
            </a>
          </div>
        </header>
        <main className="lg:w-1/2 min-h-[2000px]">
          <section id="about">
            {/* <div className="sticky top-0 z-10 bg-slate-900 w-screen">
              <h2 className="p-4 font-bold uppercase text-sm tracking-widest text-slate-200">
                {"// About"}
              </h2>
            </div> */}
            <>
              <p className="mb-4">
                Enthusiastic and passionate little boy in modern and advanced
                web technologies, with a particular focus on the JavaScript
                stack. I strive to stay up to date with the latest trends and
                best practices in the JavaScript ecosystem to ensure that my
                projects are always built on solid foundations.
              </p>
              <p className="mb-4">
                While my main expertise lies in web development, I&apos;m also
                waiting for the stars to align to venture into the realm of
                mobile development, especially React Native. The thought of
                creating mobile and web applications that share the majority of
                their business logic thrills me up.
              </p>
              <p>
                Beyond the world of coding, I find solace and joy in spending
                quality time with my loved ones and activities that invigorate
                my body and mind. Saxophone, wait for me!.
              </p>
            </>
          </section>
          <section id="experience" className="mt-24">
            <ol className="group/list">
              <li className="mb-16">
                <ExperienceCard
                  time="Jan 2023 - present"
                  title="Software Engineer · Evolutio"
                  companyUrl="https://evolutio.hr"
                  description="implementing solution integrations for Infobip. Integrations will be used for customer support, marketing campaigns, B2B, and more. In the process of developmet we are using Infobip's channels for communication, and our job is to connect those channels and clients whose services will be used by the end users."
                  tags={[
                    "TypeScript",
                    "Express.js",
                    "MySQL",
                    "MongoDB",
                    "Nest.js",
                    "React",
                    "Tailwind",
                  ]}
                />
              </li>
              <li className="mb-16">
                <ExperienceCard
                  time="Jan 2022 - Jan 2023"
                  title="Web Developer · Caelor"
                  companyUrl="https://caelor.com"
                  description="Developing highly engaging, innovative, and user-friendly Jira and Confluence apps"
                  tags={[
                    "JavaScript",
                    "Express.js",
                    "MySQL",
                    "React",
                    "Handlebars",
                    "styled-components",
                    "Atlaskit",
                  ]}
                />
              </li>
              <li className="mb-16">
                <ExperienceCard
                  time="Dec 2020 - Jan 2022"
                  title="Web Developer · venITure"
                  companyUrl="https://veniture.net/en"
                  description="Developing highly engaging, innovative, and user-friendly Jira and Confluence apps"
                  tags={[
                    "JavaScript",
                    "Express.js",
                    "MySQL",
                    "React",
                    "Handlebars",
                    "SCSS",
                    "styled-components",
                    "Atlaskit",
                  ]}
                />
              </li>
            </ol>
          </section>
        </main>
      </div>
    </div>
  );
}
