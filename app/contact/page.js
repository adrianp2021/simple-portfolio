"use client";
import { useState } from "react";
import emailTemplate from "../components/emailTemplate";
import Link from "next/link";

export default function Contact() {
  // const socialMedia = [
  //   {
  //     name: "Send an email",
  //     link: "mailto:adrianpantea10@gmail.com",
  //   },
  //   {
  //     name: "Follow me on Linkedin",
  //     link: "https://www.linkedin.com/in/adrian-pantea/",
  //   },
  //   {
  //     name: "Follow me on Github",
  //     link: "https://github.com/adrianp2021",
  //   },
  //   {
  //     name: "Follow me on Twitter",
  //     link: "https://twitter.com/AdrianPantea4",
  //   },
  // ];

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  // const [status, setStatus] = useState("");

  // async function handleOnSubmit(e) {
  //   e.preventDefault();
  //   const formData = {
  //     name,
  //     email,
  //     message,
  //   };

  //   setSubmitted(true);

  //   fetch("/api/mail", {
  //     method: "post",
  //     body: JSON.stringify(formData),
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       setSubmitted(false);
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //       setStatus("success");
  //     } else {
  //       setStatus("error");
  //     }
  //   });
  // }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    if (!firstName || !email) {
      console.error("First name and email are required");
      return;
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          // added headers
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      if (!response.ok) {
        // added catch error
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <section>
        <div className="pt-10 text-sm font-light decoration-1 ">
          <Link
            className="flex items-center  hover:text-orange-600"
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

        {/* <div>
          <div>
            <h1>Contact</h1>
            <p>
              If you just want to say hi, discuss a project or get to know each
              other, let's get in touch.{" "}
            </p>
          </div>
          <div>
            <div>
              <form
                action="submit"
                method="POST"
                // onSubmit={handleOnSubmit}
              >
                Name
                <input
                  type="text"
                  // value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="John Doe"
                  _placeholder={{ fontSize: "14px" }}
                  name="name"
                  isRequired
                />
                Email address
                <input
                  type="email"
                  placeholder="john.doe@email.com"
                  _placeholder={{ fontSize: "14px" }}
                  // value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                Message
                <textarea
                  placeholder="write your message..."
                  _placeholder={{ fontSize: "14px" }}
                  // value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <div>
                  <button
                    mt={5}
                    borderRadius="xl"
                    type="submit"
                    color="#7A7171"
                  >
                    <p>Send </p>
                  </button>
                </div>
                <div>
                  {status === "success" ? (
                    <div status="success">
                      <p mr={2}>Success!</p>
                      <p>Your email has been sent.</p>
                    </div>
                  ) : status === "error" ? (
                    <div status="error">
                      <div mr={2}>Error!</div>
                      Your email was unable to be sent.
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div> */}

        <form
          className="mt-6 flex flex-col text-black max-w-xl gap-4 z-10 w-56 "
          onSubmit={handleSubmit}
        >
          <input
            name="firstName"
            type="text"
            required
            className="rounded-md  px-3.5 py-2.5  ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
            placeholder="First name"
            value={firstName}
            // onChange={handleChange}
            onChange={(e) => {
              setFirstName(e.target.value);
              console.log(firstName);
            }}
          />

          <input
            name="lastName"
            type="text"
            required
            className="rounded-md  px-3.5 py-2.5  ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
            placeholder="Last name"
            value={lastName}
            // onChange={handleChange}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

          <input
            name="email"
            type="text"
            required
            className="rounded-md  px-3.5 py-2.5  ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
            placeholder="Email"
            value={email}
            // onChange={handleChange}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            name="message"
            type="text"
            required
            className="rounded-md  px-3.5 py-2.5  ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
            placeholder="Message"
            value={message}
            // onChange={handleChange}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            type="submit"
            className="flex justify-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            {" "}
            send email
            {/* {loading ? (
              <div
                style={{
                  borderTopColor: "transparent",
                }}
                className="w-4 h-4 border-2 border-white border-solid rounded-full animate-spin"
              ></div>
            ) : (
              "Submit"
            )} */}
          </button>
        </form>
      </section>
    </>
  );
}
