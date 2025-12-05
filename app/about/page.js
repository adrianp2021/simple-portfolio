"use client";
import Link from "next/link";
import Nav from "../components/nav";
import SkillSection from "../components/skillSection";

// import { figtree } from "next/font/google";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

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

const skills = {
  frontEnd: [
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
      description: "JavaScript library",
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
  ],
  backEnd: [
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
      description: "Database system",
      image: post,
    },
    {
      name: "Mongoose",
      link: "https://mongoosejs.com/",
      description: "Object data modeling",
      image: mongoose,
    },
  ],
  coding: [
    {
      name: "VS Code",
      link: "https://code.visualstudio.com/",
      description: "Code editor",
      image: vs,
    },
    {
      name: "GitHub",
      link: "https://github.com/",
      description: "Hosting code platform",
      image: github,
    },
    {
      name: "Insomnia",
      link: "https://insomnia.rest/",
      description: "API platform",
      image: insomnia,
    },
  ],
  productivity: [
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
      description: "Package manager",
      image: npm,
    },
    {
      name: "Yarn",
      link: "https://yarnpkg.com/",
      description: "Package manager",
      image: yarn,
    },
    {
      name: "Git",
      link: "https://www.git-scm.com/",
      description: "Control system",
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
  ],
  design: [
    {
      name: "Unsplash",
      link: "https://unsplash.com/",
      description: "Image platform",
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
      description: "Digital design",
      image: awwwards,
    },
    {
      name: "Behance",
      link: "https://www.behance.net/",
      description: "Creative work",
      image: behance,
    },
  ],
  other: [
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
  ],
};

export default function About() {
  return (
    <>
      <Nav />
      <main className="pt-8">
        <div className={`pt-4`}>
          <Link
            className="flex items-center text-sm font-medium text-black hover:text-neutral600 dark:hover:text-saffron dark:text-offWhite"
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
              className="w-4 h-4 mr-2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back Home
          </Link>
        </div>
        <div>
          <section className="pt-4 dark:text-offWhite text-black">
            <p className={`${figtree.className} text-xl font-bold pb-4`}>
              More about me
            </p>
            <p className="dark:text-neutral300 text-base font-light tracking-medium">
              Hi, I’m Adrian. I’ve found that my favorite place to work is right
              where technology, investigation, and privacy intersect. I like
              puzzles, exploring patterns in data, and figuring out how tech can
              help solve complex problems - without ever compromising trust or
              privacy.
            </p>
          </section>

          <section className="dark:text-offWhite text-black ">
            <p className={`${figtree.className} text-xl font-bold py-4 `}>
              Work
            </p>
            <p className="dark:text-neutral300 text-base font-light tracking-medium  ">
              My journey began with law. I was fascinated by rules, systems, and
              how decisions ripple through real life. Along the way, I
              discovered technology – suddenly I was building, analysing, and
              experimenting with tools that could turn information into insight.
              That’s when I realised I loved the investigative side of tech:
              mapping, analysing, connecting the dots, and asking the right
              questions.
              <br></br>
              <br></br>
              I’ve trained in software engineering and enjoy building things
              with JavaScript, Python, React, Node.js, and more. But what really
              excites me isn’t just coding - it’s using those skills to
              understand problems from different angles and find creative,
              responsible ways to solve them. In my work, I thrive on challenges
              that make me think critically and make decisions under
              uncertainty. I enjoy projects that balance multiple priorities and
              require curiosity, boldness, and care. Every task is an
              opportunity to learn, adapt, and grow.
              <br></br>
              <br></br>
              I’m particularly drawn to mapping, data analysis, and the
              ways technology and law intersect. I like exploring new
              approaches, asking questions, and connecting ideas in ways that
              make sense to both humans and machines. My professional journey
              has been diverse, with experiences ranging from legal translation
              to data compliance and software engineering.
            </p>
          </section>

          <section className="dark:text-offWhite text-black ">
            <p className={`${figtree.className} text-xl font-bold py-4 `}>
              Education
            </p>
            <p className="dark:text-neutral300 text-base font-light tracking-medium">
              I hold a degree in Law, and this educational journey has
              surprisingly enhanced my analytical skills, which I now apply to
              understanding programming languages and software development
              methodologies. It has also fueled my passion for creating
              innovative solutions.
            </p>
          </section>

          <section className="dark:text-offWhite text-black py-4">
            <p className={`${figtree.className} text-xl font-bold  `}>
              Interests
            </p>

            <p className=" dark:text-neutral300 text-base font-light tracking-medium pt-4 ">
              When I'm not coding, you'll often find me immersing myself in
              virtual worlds or tinkering with new gadgets. I'm an avid gamer,
              currently engrossed in titles like
              <span className="ml-1 underline underline-offset-4 text-black dark:text-offWhite dark:hover:text-saffron hover:text-neutral600">
                <a
                  href="https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
                  target="_blank"
                >
                  The Witcher 3
                </a>
              </span>
              , where I've spent countless hours unraveling their immersive
              stories.
            </p>
          </section>

          <section className=" dark:text-offWhite text-black">
            <p className={`${figtree.className} text-xl font-bold pb-6 `}>
              Stack
            </p>
            <SkillSection title="Frontend Skills" skills={skills.frontEnd} />
            <SkillSection title="Backend Skills" skills={skills.backEnd} />
            <SkillSection title="Coding Tools" skills={skills.coding} />
            <SkillSection
              title="Productivity Tools"
              skills={skills.productivity}
            />
            <SkillSection title="Design Tools" skills={skills.design} />
            <SkillSection title="Other" skills={skills.other} />
          </section>
        </div>
      </main>
    </>
  );
}
