"use client";
import { use, useState } from "react";
import emailTemplate from "../components/emailTemplate";
import Link from "next/link";
import ToggleButton from "../components/buttonDarkMode";

export default function Contact() {
  // const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!name || !email) {
      console.error("First name and email are required");
      return;
    }

    // try {
    //   const response = await fetch("/api/send", {
    //     method: "POST",
    //     headers: {
    //       // added headers
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name, email, message }),
    //   });

    //   if (!response.ok) {
    //     // added catch error
    //     throw new Error(`HTTP error! status: ${response.status}`);

    //   } else {
    //     setStatus("error");
    //   }

    //   const data = await response.json();
    //   setStatus("success");
    //   console.log("Response data:", data);
    // } catch (error) {
    //   console.error("Error sending email:", error);
    // }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        const data = await response.json();
        console.log("Response data:", data);
      } else {
        setStatus("error");
        const errorData = await response.json();
        console.error("Error response data:", errorData);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }

    setTimeout(() => {
      setStatus(null);
      setName("");
      setEmail("");
      setMessage("");
    }, 8000);
  };

  return (
    <>
      <ToggleButton />
      <section className="pt-20 pb-8 ">
        <div className=" text-sm font-light decoration-1 w-max">
          <Link
            className="flex items-center  hover:text-orange-600 "
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
            Back to home page
          </Link>
        </div>

        <h2 className=" pt-8 text-2xl font-semibold text-orange-500">
          Contact
        </h2>
        <p className="text-md text-black dark:text-offWhite pt-3">
          If you just want to say hi, discuss a project or get to know each
          other, let's get in touch.{" "}
        </p>

        <div className="rounded-2xl mt-8 p-1 bg-babyPowder dark:bg-neutral900 text-black">
          <p className="text-md font-medium py-2 px-4 text-neutral900 dark:text-neutral100">
            Let's connect
          </p>
          <div className="border rounded-xl overflow-hidden shadow-sm border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 ">
            <div className="text-md font-extralight  no-underline items-center flex gap-4 p-2 rounded-lg transition-colors ">
              <form
                className="w-full p-2 dark:text-offWhite"
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor="name"
                  className="text-sm font-light text-neutral-400 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Full name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="my-2 rounded-md focus:outline-none  dark:bg-background dark:border-neutral800 px-3 py-2.5 ring-1 ring-inset dark:ring-gray600 ring-neutral200  dark:focus:ring-gray600 focus:ring-yellow text-sm w-full "
                  placeholder="John Doe"
                  value={name}
                  // onChange={handleChange}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(setName);
                  }}
                />

                <label className="block">
                  <span className="block text-sm font-light text-neutral-400 after:content-['*'] after:ml-0.5 after:text-red-500 ">
                    Email
                  </span>

                  <input
                    name="email"
                    type="email"
                    // required
                    className="peer ... my-2 rounded-md focus:outline-none dark:bg-neutral-950 dark:border-neutral-800 px-3 py-2.5 ring-1 ring-inset ring-gray-600 focus:ring-orange-500 text-sm w-full disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-red-500 invalid:text-red-600
                    focus:invalid:border-red-500 focus:invalid:ring-red-500"
                    placeholder="johndoe@email.com"
                    value={email}
                    // onChange={handleChange}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <p className="invisible peer-invalid:visible text-orange text-sm">
                    Please provide a valid email address.
                  </p>
                </label>

                <label
                  htmlFor="message"
                  className="text-sm font-light text-neutral-400 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  type="text"
                  required
                  className="my-2 rounded-md focus:outline-none dark:bg-neutral-950 dark:border-neutral-800 px-3 py-2.5 ring-1 ring-inset ring-gray-600 focus:ring-orange-500 text-sm w-full"
                  placeholder="Write your message..."
                  value={message}
                  // onChange={handleChange}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />

                <button
                  type="submit"
                  className={`flex justify-center rounded-md px-3 py-2.5 text-sm font-semibold text-white shadow-sm ${
                    status === "success"
                      ? "bg-orange-500 opacity-50 cursor-not-allowed"
                      : "rounded-md bg-orange-500 px-3  text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
                  }`}
                  disabled={status === "success"}
                >
                  Send email
                </button>

                <div className=" " role="alert">
                  {status === "success" ? (
                    <div className="rounded-md bg-green-500 px-3 py-3.5 mt-4 text-sm font-semibold text-white shadow-sm ">
                      Your email has been sent.
                    </div>
                  ) : status === "error" ? (
                    <div
                      role="alert"
                      className="bg-red-500  border-red-400 px-3 py-3.5 mt-4 text-sm font-medium text-white shadow-sm rounded-md"
                    >
                      Holy smokes! Something bad happened.
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
