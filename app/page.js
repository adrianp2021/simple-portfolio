import Image from "next/image";
import Link from "next/link";
import photo from "../public/me.jpeg";
import Contact from "./contact/page";

const jobs = [
  {
    // src: "https://static-00.iconduck.com/assets.00/uber-icon-256x256-649uswep.png",
    src: "/uber.png",
    name: "Uber",
    year: "2021 - present",
    alt: "Uber",
    location: "London, UK (remote based)",
    role: "Public Safety Response Specialist",
    description:
      "Data Compliance and Policy, liaising with law enforcement agencies worldwide. Daily responsibilities include meticulous analyses of data requests to align with global policies and GDPR regulations, all while upholding the highest standards of personal integrity and user trust.",
    recipient: "https://www.uber.com/gb/en/",
  },
  {
    // src: "https://banner2.cleanpng.com/20180413/xbw/kisspng-general-assembly-seattle-technology-user-experienc-startup-5ad124379ce884.2961021115236557356427.jpg",
    src: "/ga.png",
    name: "General Assembly",
    year: "May - July 2021",
    alt: "General Assembly",
    description:
      "In a 12-week bootcamp, I delved into JavaScript, React, Vue JS, and more for front-end development, refining UI design. Gained expertise in Python, Django, NodeJS, SQL, and MongoDB for back-end. Proficient in Git, GitHub, VS Code, and Agile for efficient project management.",
    location: "London, UK",
    role: "Software Engineering Immersive",
    recipient: "https://generalassemb.ly/",
  },
  {
    // src: "https://pbs.twimg.com/profile_images/798100060101902336/-MIkj5Pl_400x400.jpg",
    src: "/dep.png",
    name: "De Pinna LLP",
    year: "2020 - 2021",
    alt: "De Pinna LLP",
    description:
      "At the UK's oldest notarial firm, I complemented my legal studies by drafting and revising legal documents in English and foreign languages. Delivered over 20 daily translations, ensuring precise alignment with client requirements for swift processing.",
    location: "London, UK",
    role: "Multilingual Paralegal",
    recipient: "https://depinna.com/",
  },
];

const projects = [
  {
    name: "Snake",
    year: "May 2021",
    project: "Project 1",
    description:
      "A childhood classic, I recreated Snake with a colour twist. Recreating the classic game as my first project was a meaningful milestone. Though simple, it symbolized my growing JavaScript skills.",
    tech: "HTML · CSS · JavsScript",
    githubRepo: "https://github.com/adrianp2021/SEI-Project-1",
    deployed: "https://adrianp2021.github.io/SEI-Project-1/",
    image:
      "https://user-images.githubusercontent.com/83225952/128079151-677d6296-d12b-4ca4-99c6-f90e619e1358.jpeg",
    commits: "19 commits",
  },
  {
    name: "Drinkard",
    year: "June 2021",
    project: "Project 2",
    description:
      "Holiday application which hosts a variety of 25 cocktails. My second project for the Software Engineering Immersive course, a React app pair-coded in a 48-hour hackathon.",
    tech: "HTML · CSS · React · Axios · API",
    githubRepo: "https://github.com/adrianp2021/SEI-Project-2",
    deployed: "https://drinkard.netlify.app/",
    image:
      "https://user-images.githubusercontent.com/83225952/202905974-1bad887a-539c-441c-9860-17f7b723b43b.png",
    commits: "25 commits",
  },
  {
    name: "Trust Pistis",
    year: "June 2021",
    project: "Project 3",
    description:
      "Application based on TrustPilot, with Greek mythology theme. This was a group project where we had to create a MERN stack app.",
    tech: "Mongo DB · Express · React · Node JS",
    githubRepo: "https://github.com/adrianp2021/SEI-Project-3",
    deployed: "https://whispering-coast-70189.herokuapp.com/",
    image:
      "https://user-images.githubusercontent.com/83225952/128638320-a818da09-c0f6-426b-b6a6-33fd8a10908f.jpeg",
    commits: "12 commits",
  },
  {
    name: "Crumble",
    year: "July 2021",
    project: "Project 4",
    description:
      "Dating app, matching users based on same interests. Crumble is a Full-Stack dating app, which allows users to register and/or login, and find others who share the same interests.",
    tech: "React · Django · Python · Postgresql",
    githubRepo: "https://github.com/adrianp2021/SEI-Project-4",
    deployed: "https://github.com/adrianp2021/SEI-Project-4",
    image:
      "https://user-images.githubusercontent.com/83225952/130610068-82aaf1c1-15b3-4c6c-82cf-8018bdc1f308.jpeg",
    commits: "15 commits",
  },
];

const socialMedia = [
  {
    name: "Email",
    recipient: "mailto:adrianpantea10@gmail.com",
    ariaLabel: "Email Adrian Pantea",
  },
  {
    name: "GitHub",
    recipient: "https://github.com/adrianp2021",
    ariaLabel: "GitHub Profile",
  },
  {
    name: "LinkedIn",
    recipient: "https://www.linkedin.com/in/adrian-pantea/",
    ariaLabel: "LinkedIn Profile",
  },
];

// import React from "react";
// let a = React.version
// console.log('what version is ->', a)

export default function Home() {
  return (
    <>
      <main className="">
        <section className=" pt-20 pb-8">
          <div className="flex items-center">
            <Image
              src={photo}
              alt="my photo"
              width={80}
              height={80}
              className="rounded-full"
              unoptimized
            />
            <div className="pl-6">
              <h1>Adrian Pantea</h1>
              <p className="text-sm font-light opacity-70">
                Product-focused Fullstack Developer
              </p>
            </div>
          </div>
          <div className="pt-10">
            <h2 className="font-medium">About</h2>
            <p className="text-sm font-light leading-relaxed mt-2">
              Hi, I'm Adrian. I enjoy building dynamic, creative products from
              start to finish. Focused on developing intuitive experiences that
              constantly grow and improve based on user metrics. More about me
              <span className="ml-1 text-sm font-semibold decoration-1 underline underline-offset-4 text-orange-400 hover:text-orange-300">
                <Link href="/about">here</Link>
              </span>
              .
            </p>
          </div>
        </section>

        <section className="">
          <div className="pb-5">
            <h2 className="font-medium">Work experience</h2>
          </div>
          {jobs.map((job, i) => (
            <div key={i} className="flex flex-col sm:flex-row pb-8">
              <div className="w-full sm:w-1/4">
                <p className="opacity-70 text-sm font-extralight">{job.year}</p>
              </div>
              <div className="w-full sm:w-3/4 sm:mt-0 mt-4 ">
                <h2 className="text-sm font-light mb-2">
                  {job.role} at{" "}
                  <span className=" font-semibold text-sm decoration-1 underline underline-offset-4 text-orange-400 hover:text-orange-300">
                    <a
                      href={job.recipient}
                      target="_blank"
                      className="underline underline-offset-4"
                    >
                      {job.name}
                    </a>
                  </span>
                </h2>
                <p className="text-sm font-light leading-relaxed my-3">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="pb-8">
          <div className="pb-5">
            <h2 className="font-medium">Projects</h2>
          </div>
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col sm:flex-row mb-8">
              <div className="w-full sm:w-1/4">
                <p className="opacity-70 text-sm font-extralight">
                  {project.year}
                </p>
              </div>
              <div className="w-full sm:w-3/4 sm:mt-0 mt-4">
                <div className="">
                  <div>
                    <span className="text-sm font-semibold decoration-0 underline underline-offset-4 text-orange-400 hover:text-orange-300">
                      <a href={project.githubRepo} target="_blank">
                        {project.name}
                      </a>
                    </span>
                    <h2 className="text-sm font-extralight leading-relaxed my-3">
                      {project.description}
                    </h2>
                  </div>

                  <div className="flex  gap-2 mt-2 justify-end ">
                    {project.tech.split(" · ").map((tech, index) => (
                      <spans
                        key={index}
                        className="font-light text-xs px-2.5 py-1 rounded-full bg-zinc-800 text-gray-100 hover:bg-zinc-700"
                      >
                        {tech}
                      </spans>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="">
          <div className="pb-5">
            <h2 className="font-medium">Let's connect</h2>
          </div>
          <div className="container flex justify-between items-center">
            {/* <div className="flex">
              {socialMedia.map((social, i) => {
                return (
                  <div
                    key={i}
                    className="flex mr-4 text-sm font-extralight hover:text-gray-400"
                  >
                    <div className="flex mb-6">
                      <a href={social.recipient} target="_blank" aria-label={social.ariaLabel}>
                        {social.name}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div> */}

            <div className="flex">
              {socialMedia.map((social, i) => (
                <div
                  key={i}
                  // className="mr-4 text-sm font-extralight hover:text-gray-400  "
                  className="mr-4 mb-6 text-sm font-semibold decoration-1 underline underline-offset-4 text-orange-400 hover:text-orange-300"
                >
                  <a
                    href={social.recipient}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.name} profile`}
                  >
                    {social.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <Link
                href="/contact"
                className="text-sm font-semibold decoration-0 underline underline-offset-4 text-orange-400 hover:text-orange-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className=" text-white">
        <div className="text-center text-sm font-extralight border-t opacity-50 py-4">
          <p>&copy; 2024 Adrian Pantea. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  );
}
