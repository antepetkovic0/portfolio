import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="text-sm text-gray-500 italic">&lt;web developer&gt;</p>
          <h1>
            Hi, I&apos;m <span>Ante</span>
          </h1>
          <p className="text-sm text-gray-500 italic">
            &lt;&#47;web developer&gt;
          </p>
          <Link href="/">
            <button className="mt-8 py-2 px-4 rounded bg-purple-700 text-white tracking-wide font-medium">
              Let&apos;s build something together
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
