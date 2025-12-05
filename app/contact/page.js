"use client";
import { use, useState } from "react";
import emailTemplate from "../components/emailTemplate";
import Link from "next/link";
import Nav from "../components/nav";
import { Figtree } from "next/font/google";
import Maps from "../components/maps";

const figtree = Figtree({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Contact() {
  // const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!name || !email) {
      console.error("First name and email are required");
      return;
    }

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
        console.log("what is the response data ->", data);
      } else {
        setStatus("error");
        const errorData = await response.json();
        console.error("Error response data ->", errorData);
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
    }, 4000);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailTouched(true);
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
        <Nav />
    
      <div>
        <section className="pt-6">
          <div className="">
            <h2
              className={`${figtree.className} pt-8 text-xl font-bold text-black dark:text-offWhite `}
            >
              Contact
            </h2>
            <p className="text-base font-light text-black dark:text-neutral400 pt-3">
              If you just want to say hi, discuss a project or get to know each
              other, let's get in touch.{" "}
            </p>
          </div>

          <div className="rounded-2xl  p-1 bg-babyPowder dark:bg-neutral900 text-black my-10">
            <p className="text-md font-medium py-2 px-4 text-neutral900 dark:text-neutral100">
              Let's connect
            </p>
            <div className="border rounded-xl overflow-hidden shadow-sm border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 ">
              <div className="text-md font-extralight  no-underline items-center flex gap-4 p-2  transition-colors ">
                <form
                  className="w-full p-2 dark:text-offWhite rounded-lg"
                  onSubmit={handleSubmit}
                >
                  <label
                    htmlFor="name"
                    className="text-sm font-normal text-neutral900 dark:text-neutral100 after:content-['*'] after:ml-0.5 after:text-red"
                  >
                    Full name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="my-2 rounded-lg font-normal focus:outline-none px-3 py-2.5 ring-1 ring-inset  dark:bg-background dark:border-neutral800  dark:focus:ring-saffron dark:ring-neutral600 ring-neutral400 focus:ring-black text-sm placeholder-neutral500 dark:placeholder-neutral400 dark:text-offwhite w-full "
                    placeholder="John Doe"
                    value={name}
                    // onChange={handleChange}
                    onChange={(e) => {
                      setName(e.target.value);
                      console.log(setName);
                    }}
                  />

                  <label className="block">
                    <span className="text-sm font-normal text-neutral900 dark:text-neutral100 after:content-['*'] after:ml-0.5 after:text-red">
                      Email
                    </span>

                    <input
                      name="email"
                      type="email"
                      className="peer ... dark:bg-neutral-950 dark:border-neutral-800 ring-gray-600 focus:ring-orange-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500 my-2 rounded-lg font-normal focus:outline-none px-3 py-2.5 ring-1 ring-inset dark:bg-background dark:border-neutral800 dark:focus:ring-saffron dark:ring-neutral600 ring-neutral400 focus:ring-black text-sm placeholder-neutral500 dark:placeholder-neutral400 dark:text-offwhite w-full"
                      placeholder="johndoe@email.com"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={() => setEmailTouched(true)}
                    />
                    {emailTouched && email && !isValidEmail(email) && (
                      <p className="my-1 text-sm dark:text-saffron text-black font-normal">
                        Please provide a valid email address.
                      </p>
                    )}
                  </label>

                  <label
                    htmlFor="message"
                    className="text-sm font-normal text-neutral900 dark:text-neutral100 after:content-['*'] after:ml-0.5 after:text-red"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    required
                    className="my-2 rounded-lg font-normal  focus:outline-none px-3 py-2.5 ring-1 ring-inset  dark:bg-background dark:border-neutral800  dark:focus:ring-saffron dark:ring-neutral600 ring-neutral400   focus:ring-black text-sm placeholder-neutral500 dark:placeholder-neutral400 dark:text-offwhite  w-full "
                    placeholder="Write your message..."
                    value={message}
                    // onChange={handleChange}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />

                  <button
                    type="submit"
                    className={`flex justify-center rounded-lg px-2.5 py-2.5 text-sm text-white shadow-sm  ${
                      status === "success"
                        ? "bg-neutral600 text-offWhite font-normal cursor-not-allowed"
                        : "rounded-lg px-3 font-normal shadow-sm dark:bg-lightBackground dark:hover:bg-saffron dark:text-black bg-black text-offWhite hover:bg-neutral600"
                    }`}
                    disabled={status === "success"}
                  >
                    Send email
                  </button>

                  <div className="" role="alert">
                    {status === "success" ? (
                      <div className="flex items-center rounded-lg bg-green font-medium px-3 py-2.5 mt-4 text-sm text-white shadow-sm ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 mr-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Successfully submitted.
                      </div>
                    ) : status === "error" ? (
                      <div
                        role="alert"
                        className="flex items-center bg-red px-3 py-2.5 mt-4 text-sm font-medium shadow-sm rounded-lg text-offWhite"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-5 mr-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Oops, please try again.
                      </div>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* <div className="rounded-2xl p-1 bg-babyPowder dark:bg-neutral900 text-black mb-8 ">
            <p className="text-md font-medium py-2 px-4 text-neutral900 dark:text-neutral100">
              Currently located in Leeds, UK.
            </p>
            <div className="border rounded-xl overflow-hidden shadow-sm border-neutral200 bg-lightBackground dark:bg-background dark:border-neutral800 ">
              <div className="">
                <Maps />
              </div>
            </div>
          </div> */}
          {/* <div className=" ">
            <div className="relative w-full h-[300px]">
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60 "
                style={{
                  backgroundImage: "url(/world.svg)",
                  filter: "brightness(0.3) grayscale(100%)",
                }}
              ></div>

              <div className="absolute top-[45%] left-[60%] flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -top-1 -left-1 w-16 h-16 bg-blue-500 opacity-50 rounded-full blur-xl"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full z-10"></div>
                </div>

                <div className="w-px h-20 bg-blue-500 mt-2"></div>

                <div className="px-3 py-1 text-sm text-white bg-neutral-600 rounded-lg shadow-lg mt-2">
                  I am here
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
}
