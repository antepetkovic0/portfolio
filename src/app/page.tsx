import Icon from "@/components/icon/Icon";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full justify-center items-center">
      <div className="p-16 text-center">
        <h1 className="py-4 text-8xl font-bold inline-block">
          Turning vision into reality with code.
        </h1>
        <p className="my-4">
          As a skilled full-stack developer, I am committed to transforming
          ideas into cutting-edge web applications. Explore my latest projects
          and articles, showcasing my expertise in web development.
        </p>
        <a
          href="mailto:ante.petkovic01@gmail.com"
          className="inline-block rounded-lg px-4 py-2 mt-4 text-lg font-semibold bg-violet-400"
        >
          Let&apos;s talk
        </a>
      </div>
      <div>
        <Icon name="github" />
        <Icon name="linkedin" />
      </div>
    </main>
  );
}
