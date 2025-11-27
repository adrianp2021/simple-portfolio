"use client";
import Image from "next/image";
import Link from "next/link";
import photo from "../public/g1.png";

import Nav from "./components/nav";

import { Montserrat, Nunito, Figtree } from "next/font/google";

const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const figtree = Figtree({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const jobs = [
  {
    src: "/uber.png",
    name: "Uber",
    year: "2021 - present",
    alt: "Uber",
    location: "London, UK (remote based)",
    title: "Public Safety Response Specialist",
    description:
      "GDPR and international compliance while facilitating effective collaboration between international law enforcement and user privacy protection.",
    recipient: "https://www.uber.com/gb/en/",
  },
  {
    src: "/dep.png",
    name: "De Pinna LLP",
    year: "2020 - 2021",
    alt: "De Pinna LLP",
    description:
      "At the UK's oldest notarial firm, I complemented my legal studies by drafting and revising legal documents in English and foreign languages.",
    location: "London, UK",
    title: "Multilingual Paralegal",
    recipient: "https://depinna.com/",
  },
];

const projects = [
  {
    name: "Snake",
    year: "May 2021",
    project: "Project 1",
    description:
      "A childhood classic, I recreated Snake with a colour twist. Working on this game as my first project was a meaningful milestone. Though simple, it symbolised my JavaScript learning.",
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

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-8">
        <div>
          <section className="pt-6 pb-6 dark:text-offWhite text-black">
            <div className="flex items-center ">
              <a
                href="https://www.linkedin.com/in/adrian-pantea/"
                target="_blank"
                aria-label="Visit my LinkeIn profile"
                rel="noopener noreferrer"
                className=" rounded-full overflow-hidden "
              >
                <Image
                  src={photo}
                  alt="my photo"
                  width={60}
                  height={60}
                  priority
                  
                />
              </a>
              <div className="pl-5">
                <h1 className=" font-normal  ">Adrian Pantea</h1>
                <p className="font-semibold dark:text-neutral400">
                  Fullstack Developer
                </p>
              </div>
            </div>
            <div className="pt-4">
              <p className={`mt-2 dark:text-neutral300 text-base font-light`}>
                Hi, I'm Adrian. I enjoy building simple, creative products from
                start to finish. Focused on developing intuitive experiences
                that constantly grow and improve based on user metrics.{" "}
                <Link href="/about">
                  <span className="font-light underline underline-offset-4 dark:hover:text-saffron dark:text-offWhite text-black hover:text-neutral600">
                    Learn more about Adrian Pantea
                  </span>
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="dark:text-offWhite text-black text-base">
            <div className={`${figtree.className} text-xl font-bold pb-6`}>
              <p>Work experience</p>
            </div>
            {jobs.map((job, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row pb-6 dark:text-offWhite `}
              >
                <div className="w-full sm:w-1/4  dark:text-neutral300">
                  <p>{job.year}</p>
                </div>

                <div className="w-full sm:w-3/4 sm:mt-0 mt-2 ">
                  <p className="font-medium">
                    {job.title} at{" "}
                    <span className="dark:hover:text-saffron hover:text-neutral500 underline underline-offset-4">
                      <a href={job.recipient} target="_blank">
                        {job.name}
                      </a>
                    </span>
                  </p>
                  <p className={` mt-2  dark:text-neutral300  font-light`}>
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section className=" dark:text-offWhite text-black ">
            <div className={`${figtree.className} text-xl font-bold pb-6 `}>
              <p>Projects</p>
            </div>

            {projects.map((project, i) => (
              <div key={i} className="flex flex-col sm:flex-row pb-6 text-base">
                <div className="w-full sm:w-1/4">
                  <p className="  dark:text-neutral300">{project.year}</p>
                </div>

                <div className="w-full sm:w-3/4 sm:mt-0 mt-2 ">
                  <h2 className={`font-medium text-base text-md`}>
                    <span className="dark:hover:text-saffron hover:text-neutral600 underline underline-offset-4  ">
                      <a href={project.githubRepo} target="_blank">
                        {project.name}
                      </a>
                    </span>
                  </h2>
                  <p className={` mt-2  dark:text-neutral300 font-light `}>
                    {project.description}
                  </p>
                  <div className="flex gap-2 justify-end ">
                    {project.tech.split(" · ").map((tech, index) => (
                      <span
                        key={index}
                        className=" mt-4 font-normal text-xs px-2 py-1 rounded-full bg-black dark:bg-offWhite dark:text-black text-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
