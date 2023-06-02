import ExperienceCard from "@/components/cards/ExperienceCard";
import Icon from "@/components/icon/Icon";
import TagList from "@/components/tags/TagList";

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
        </header>
        <main className="lg:w-1/2 min-h-[2000px]">
          <section id="about">
            {/* <div className="sticky top-0 z-10 bg-slate-900 w-screen">
              <h2 className="p-4 font-bold uppercase text-sm tracking-widest text-slate-200">
                {"// About"}
              </h2>
            </div> */}
            <>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </>
          </section>
          <section id="experience">
            <TagList tags={["React", "TypeScript"]} />
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
            <ExperienceCard
              time="Jan 2022 - Jan 2023"
              title="Web Developer · Caelor"
              companyUrl="https://caelor.com/"
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
          </section>
        </main>
      </div>
    </div>
  );
}
