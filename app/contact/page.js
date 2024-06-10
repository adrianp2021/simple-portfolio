// export default function Contact() {
//   return <h1>this is the contact page</h1>;
// }
"use client";
import React from "react";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };

    setSubmitted(true);

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  }

  return (
    <section className=" ">
      <form action="submit" method="POST" onSubmit={handleOnSubmit}>
        <section className="">
          <div id="name" required>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="text-black mx-4  "
            />
          </div>
          <div id="email" required>
            <label>Email address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="text-black"
            />
          </div>
          <div id="text" required>
            <label>Message:</label>
            <textarea
              placeholder="write your message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="text-black"
            />
          </div>
          <button
            type="submit"
            isLoading={submitted}
            loadingText="Submitting"
            className="border"
          >
            SUBMIT
          </button>

          <div>
            {status === "success" ? (
              <div status="success">
                <div />
                <div mr={2}>Success!</div>
                <div>Your email has been sent.</div>
              </div>
            ) : status === "error" ? (
              <div status="error">
                <div />
                <div mr={2}>Error!</div>
                <div>Your email was unable to be sent.</div>
              </div>
            ) : null}
          </div>
        </section>
      </form>
    </section>
  );
}
