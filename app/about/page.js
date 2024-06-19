"use client";
import Image from "next/image";
import Link from "next/link";

import html from "../../public/html.svg";
import css from "../../public/css.svg";
import javascript from "../../public/javascript.svg";
import react from "../../public/react.svg";
import nextjs from "../../public/nextjs.svg";
import bootstrap from "../../public/bootstrap.svg";
import framer from "../../public/framer.svg";
import chakra from "../../public/chakra.svg";
import axios from "../../public/axios.svg";

import node from "../../public/node.svg";
import express from "../../public/express.svg";
import python from "../../public/python.svg";
import django from "../../public/django.svg";
import mongo from "../../public/mongo.svg";
import post from "../../public/post.svg";
import mongoose from "../../public/mongoose.svg";

import vs from "../../public/vs.svg";
import github from "../../public/github.svg";
import insomnia from "../../public/insomnia.svg";

import slack from "../../public/slack.svg";
import zoom from "../../public/zoom.svg";
import trello from "../../public/trello.svg";
import npm from "../../public/npm.svg";
import yarn from "../../public/yarn.svg";
import git from "../../public/git.svg";
import agile from "../../public/agile.svg";
import ray from "../../public/ray.svg";

import unsplash from "../../public/unsplash.svg";
import figma from "../../public/figma.svg";
import photoshop from "../../public/photoshop.svg";
import awwwards from "../../public/awwwards.svg";
import behance from "../../public/behance.svg";

import spotify from "../../public/spotify.svg";
import youtube from "../../public/youtube.svg";

import ToggleButton from "../components/buttonDarkMode";

// import { FiSun } from "react-icons/fi";
// import { FiMoon } from "react-icons/fi";

export default function About() {
  const frontEnd = [
    {
      name: "HTML 5",
      link: "https://html.com/",
      description: "Web content language",
      image: html,
    },
    {
      name: "CSS 3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      description: "Style and design",
      image: css,
    },
    {
      name: "JavaScript",
      link: "https://www.javascript.com/",
      description: "Interactive web",
      image: javascript,
    },
    {
      name: "React",
      link: "https://reactjs.org/",
      description: "Javascript library",
      image: react,
    },
    {
      name: "Next JS",
      link: "https://nextjs.org/",
      description: "React framework",
      image: nextjs,
    },
    {
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
      description: "Responsive grid system",
      image: bootstrap,
    },
    {
      name: "Framer Motion",
      link: "https://www.framer.com/motion/",
      description: "Animation library",
      image: framer,
    },
    {
      name: "Chakra UI",
      link: "https://chakra-ui.com/",
      description: "Component library",
      image: chakra,
    },
    {
      name: "Axios",
      link: "https://axios-http.com/docs/intro",
      description: "HTTP requests library",
      image: axios,
    },
  ];

  const backEnd = [
    {
      name: "Node JS",
      link: "https://nodejs.org/en/",
      description: "JavaScript runtime",
      image: node,
    },
    {
      name: "Express JS",
      link: "https://expressjs.com/",
      description: "Web framework",
      image: express,
    },
    {
      name: "Python",
      link: "https://www.python.org/",
      description: "Backend development",
      image: python,
    },
    {
      name: "Django",
      link: "https://www.djangoproject.com/",
      description: "Python framework",
      image: django,
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      description: "Document database",
      image: mongo,
    },
    {
      name: "Postgresql",
      link: "https://www.postgresql.org/",
      description: "Relational database system",
      image: post,
    },
    {
      name: "Mongoose",
      link: "https://mongoosejs.com/",
      description: "Object data modeling",
      image: mongoose,
    },
  ];

  const coding = [
    {
      name: "VS Code",
      link: "https://code.visualstudio.com/",
      description: "Code editor for the modern web",
      image: vs,
    },
    {
      name: "GitHub",
      link: "https://github.com/",
      description: "Platform for hosting code",
      image: github,
    },
    {
      name: "Insomnia",
      link: "https://insomnia.rest/",
      description: "API development platform",
      image: insomnia,
    },
  ];

  const productivity = [
    {
      name: "Slack",
      link: "https://slack.com/intl/en-gb/",
      description: "Platform for teamwork",
      image: slack,
    },
    {
      name: "Zoom",
      link: "https://zoom.us/",
      description: "Video conferencing",
      image: zoom,
    },
    {
      name: "Trello",
      link: "https://trello.com/",
      description: "Organisational tool",
      image: trello,
    },
    {
      name: "NPM",
      link: "https://www.npmjs.com/",
      description: "Largest package manager",
      image: npm,
    },
    {
      name: "Yarn",
      link: "https://yarnpkg.com/",
      description: "Open-source package manager",
      image: yarn,
    },
    {
      name: "Git",
      link: "https://www.git-scm.com/",
      description: "Version control system ",
      image: git,
    },
    {
      name: "Agile",
      link: "https://www.atlassian.com/agile#:~:text=Agile%20isn't%20defined%20by,or%20an%20ideal%20team%20size.",
      description: "Project management",
      image: agile,
    },
    {
      name: "Ray.so",
      link: "https://ray.so/",
      description: "Code snippets",
      image: ray,
    },
  ];

  const design = [
    {
      name: "Unsplash",
      link: "https://ray.so/",
      description: "Image sharing platform",
      image: unsplash,
    },
    {
      name: "Figma",
      link: "https://www.figma.com/",
      description: "Test design tool",
      image: figma,
    },
    {
      name: "Adobe Photoshop",
      link: "https://www.adobe.com/uk/products/photoshop.html",
      description: "Graphics editor",
      image: photoshop,
    },
    {
      name: "Awwwards",
      link: "https://www.awwwards.com/",
      description: "Digital design meeting point",
      image: awwwards,
    },
    {
      name: "Behance",
      link: "https://www.behance.net/",
      description: "Creative work platform",
      image: behance,
    },
  ];

  const other = [
    {
      name: "Spotify",
      link: "https://support.spotify.com/us/",
      description: "Digital music service",
      image: spotify,
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/",
      description: "Video sharing platform",
      image: youtube,
    },
  ];

  return (
    <main className="">
      <ToggleButton />
      <div className="pt-20 flex justify-between items-center text-base font-normal decoration-1 ">
        <Link
          className="flex items-center text-black hover:text-neutral600 dark:hover:text-yellow dark:text-offWhite"
          href="/"
          aria-label="Back to home page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" w-4 mr-1 "
          >
            <path d="M3 19V5"></path>
            <path d="m13 6-6 6 6 6"></path>
            <path d="M7 12h14"></path>
          </svg>
          Return to home page
        </Link>
      </div>

      <section className="pt-8">
        <p className="text-2xl font-semibold text-black dark:text-yellow">
          More about me
        </p>
        <p className="text-base font-normal dark:text-offWhite text-black leading-relaxed mt-4">
          Hey there! I'm Adrian Pantea, an aspiring Fullstack Developer fueled
          by curiosity and a passion for problem-solving. While I'm relatively
          new to the tech scene, I'm eager to dive headfirst into the world of
          coding and make my mark.
        </p>
      </section>

      <section className="pt-8">
        <p className="text-2xl font-semibold text-black dark:text-yellow">
          Work
        </p>
        <p className="text-base font-normal dark:text-offWhite text-black leading-relaxed mt-4">
          My professional journey has been diverse, with experiences ranging
          from legal translation to data compliance and software engineering.
          Currently, I serve as a Public Safety Response Specialist at Uber,
          where I ensure <span className="font-bold ">data</span> compliance and
          policy adherence while maintaining the highest standards of integrity
          and user trust.
        </p>
      </section>

      <section className=" pt-8">
        <p className="text-2xl font-semibold text-black dark:text-yellow">
          Beyond the Screen
        </p>
        <p className="text-base font-normal dark:text-offWhite text-black leading-relaxed mt-4">
          When I'm not coding, you'll often find me immersing myself in virtual
          worlds or tinkering with new gadgets. I'm an avid gamer, currently
          engrossed in titles like
          <span className="ml-1 underline underline-offset-4 text-black dark:text-offWhite dark:hover:text-yellow hover:text-neutral600">
            <a
              href="https://store.steampowered.com/app/812140/Assassins_Creed_Odyssey/"
              target="_blank"
            >
              Assassin's Creed Odyssey
            </a>
          </span>{" "}
          and
          <span className="ml-1 underline underline-offset-4 text-black dark:text-offWhite dark:hover:text-yellow hover:text-neutral600">
            <a
              href="https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
              target="_blank"
            >
              The Witcher 3
            </a>
          </span>
          , where I've spent countless hours unraveling their immersive stories.
        </p>
      </section>

      <section className="py-8">
        <p className="text-2xl font-semibold text-black dark:text-yellow">
          Stack
        </p>

        <div className="rounded-2xl mt-8 p-1 bg-babyPowder dark:bg-neutral900 ">
          <p className="text-md font-medium py-2 px-4 text-neutral900 dark:text-neutral100">
            Front End
          </p>
          <div className="border rounded-xl overflow-hidden bg-white border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 p-2 grid sm:grid-cols-2 gap-x-2">
            {frontEnd.map((item, i) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline flex items-center gap-4 p-2 rounded-lg hover:text-gray400 hover:bg-neutral200 dark:hover:bg-neutral800 "
              >
                <div
                  key={i}
                  className="font-extralight mb-1 no-underline items-center flex gap-4 p-1 rounded-lg transition-colors "
                >
                  <div className="overflow-hidden rounded-md dark:bg-gray ">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center ">
                    <div>
                      <p className="text-sm font-medium text-neutral950 dark:text-neutral100">
                        {item.name}
                      </p>
                      <p className="text-sm font-light leading-relaxed text-neutral500  dark:text-neutral400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-1 bg-babyPowder dark:bg-neutral900 mt-4">
          <p className="text-md font-medium py-2 px-4 text-neutral900 dark:text-neutral100">
            Back End
          </p>
          <div className="border rounded-xl overflow-hidden bg-white border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 p-2 grid sm:grid-cols-2 gap-x-2">
            {backEnd.map((item, i) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline flex items-center gap-4 p-2 rounded-lg hover:text-gray400 hover:bg-neutral200 dark:hover:bg-neutral800 "
              >
                <div
                  key={i}
                  className="font-extralight  mb-1  no-underline items-center flex gap-4 p-2 rounded-lg transition-colors "
                >
                  <div className="overflow-hidden rounded-md dark:bg-gray">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm font-medium text-neutral950 dark:text-neutral100">
                        {item.name}
                      </p>
                      <p className="text-sm font-light leading-relaxed text-neutral500  dark:text-neutral400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-1 bg-babyPowder dark:bg-neutral900 mt-4">
          <p className="text-md font-medium py-2 px-4 text-neutral900 dark:text-neutral100">
            Coding
          </p>
          <div className="border rounded-xl overflow-hidden bg-white border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 p-2 grid sm:grid-cols-2 gap-x-2">
            {coding.map((item, i) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline flex items-center gap-4 p-2 rounded-lg hover:text-gray400 hover:bg-neutral200 dark:hover:bg-neutral800 "
              >
                <div
                  key={i}
                  className="font-extralight  mb-1  no-underline items-center flex gap-4 p-2 rounded-lg transition-colors "
                >
                  <div className="overflow-hidden rounded-md dark:bg-gray">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm font-medium text-neutral950 dark:text-neutral100">
                        {item.name}
                      </p>
                      <p className="text-sm font-light leading-relaxed text-neutral500  dark:text-neutral400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-1 bg-babyPowder dark:bg-neutral900 mt-4">
          <p className="text-md font-medium py-2 px-4 text-neutral900 dark:text-neutral100">
            Productivity
          </p>
          <div className="border rounded-xl overflow-hidden bg-white border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 p-2 grid sm:grid-cols-2 gap-x-2">
            {productivity.map((item, i) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline flex items-center gap-4 p-2 rounded-lg hover:text-gray400 hover:bg-neutral200 dark:hover:bg-neutral800 "
              >
                <div
                  key={i}
                  className="font-extralight  mb-1  no-underline items-center flex gap-4 p-2 rounded-lg transition-colors "
                >
                  <div className="overflow-hidden rounded-md dark:bg-gray">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm font-medium text-neutral950 dark:text-neutral100">
                        {item.name}
                      </p>
                      <p className="text-sm font-light leading-relaxed text-neutral500  dark:text-neutral400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-1 bg-babyPowder dark:bg-neutral900 mt-4">
          <p className="text-md font-medium py-2 px-4 text-neutral900 dark:text-neutral100">
            Design
          </p>
          <div className="border rounded-xl overflow-hidden bg-white border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 p-2 grid sm:grid-cols-2 gap-x-2">
            {design.map((item, i) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline flex items-center gap-4 p-2 rounded-lg hover:text-gray400 hover:bg-neutral200 dark:hover:bg-neutral800 "
              >
                <div
                  key={i}
                  className="font-extralight  mb-1  no-underline items-center flex gap-4 p-2 rounded-lg transition-colors "
                >
                  <div className="overflow-hidden rounded-md dark:bg-gray">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm font-medium text-neutral950 dark:text-neutral100">
                        {item.name}
                      </p>
                      <p className="text-sm font-light leading-relaxed text-neutral500  dark:text-neutral400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl p-1 bg-babyPowder dark:bg-neutral900 my-3">
          <p className="text-md font-medium py-2 px-4 text-neutral900 dark:text-neutral100">
            Other
          </p>
          <div className="border rounded-xl overflow-hidden bg-white border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 p-2 grid sm:grid-cols-2 gap-x-2">
            {other.map((item, i) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline flex items-center gap-4 p-2 rounded-lg hover:text-gray400 hover:bg-neutral200 dark:hover:bg-neutral800 "
              >
                <div
                  key={i}
                  className="font-extralight  mb-1  no-underline items-center flex gap-4 p-2 rounded-lg transition-colors "
                >
                  <div className="overflow-hidden rounded-md dark:bg-gray">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm font-medium text-neutral950 dark:text-neutral100">
                        {item.name}
                      </p>
                      <p className="text-sm font-light leading-relaxed text-neutral500  dark:text-neutral400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
