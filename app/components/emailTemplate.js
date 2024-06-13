
// "use client";
// import React from "react";

// import { useState } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [status, setStatus] = useState("");

//   async function handleOnSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       name,
//       email,
//       message,
//     };

//     setSubmitted(true);

//     fetch("/api/mail", {
//       method: "post",
//       body: JSON.stringify(formData),
//     }).then((res) => {
//       if (res.status === 200) {
//         setSubmitted(false);
//         setName("");
//         setEmail("");
//         setMessage("");
//         setStatus("success");
//       } else {
//         setStatus("error");
//       }
//     });
//   }

//   return (
//     <section className=" ">
//       <form action="submit" method="POST" onSubmit={handleOnSubmit}>
//         <section className="">
//           <div id="name" required>
//             <label>Name:</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//               className="text-black mx-4  "
//             />
//           </div>
//           <div id="email" required>
//             <label>Email address:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               className="text-black"
//             />
//           </div>
//           <div id="text" required>
//             <label>Message:</label>
//             <textarea
//               placeholder="write your message"
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//               }}
//               className="text-black"
//             />
//           </div>
//           <button
//             type="submit"
//             isLoading={submitted}
//             loadingText="Submitting"
//             className="border"
//           >
//             SUBMIT
//           </button>

//           <div>
//             {status === "success" ? (
//               <div status="success">
//                 <div />
//                 <div mr={2}>Success!</div>
//                 <div>Your email has been sent.</div>
//               </div>
//             ) : status === "error" ? (
//               <div status="error">
//                 <div />
//                 <div mr={2}>Error!</div>
//                 <div>Your email was unable to be sent.</div>
//               </div>
//             ) : null}
//           </div>
//         </section>
//       </form>
//     </section>
//   );
// }

// import { useState } from "react";
// import Head from "next/head";

// export default function Home() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = () => {
//     console.log("Call send API here");
//   };
//   return (
//     <main className={`flex flex-col items-center p-24 min-h-screen`}>
//       <Head>
//         <title>Contact Me | Coffeed</title>
//       </Head>

//       <div className="relative flex flex-col gap-4 ">
//         <div className="flex flex-col place-items-center gap-4">
//           <h1 className={`m-0 text-center text-3xl`}>Contact Me</h1>
//         </div>
//         <form
//           className="mt-6 flex flex-col max-w-xl gap-4 z-10"
//           onSubmit={handleSubmit}
//         >
//           <label htmlFor="name" className="sr-only">
//             Name
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             autoComplete="name"
//             required
//             value={name}
//             className="rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
//             placeholder="Name"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label htmlFor="email-address" className="sr-only">
//             Email address
//           </label>
//           <input
//             id="email-address"
//             name="email"
//             type="email"
//             autoComplete="email"
//             required
//             value={email}
//             className="rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="flex justify-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//           >
//             {loading ? (
//               <div
//                 style={{
//                   borderTopColor: "transparent",
//                 }}
//                 className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
//               ></div>
//             ) : (
//               "Submit"
//             )}
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useEffect } from "react";

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log("all data ->", name, email, message);

//     try {
//       const res = await fetch("/api/email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           message,
//         }),
//       });
//       res.setHeader("Allow", ["POST"]);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     } catch {
//       console.error();
//     }
//   };

// async function handleSubmit(e) {
//   e.preventDefault();

//   try {
//     const response = await fetch("/api/email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, message }),
//     });
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// }

//   return (
//     <form className="pt-10" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         // onChange={(e) => e.target.value}
//         onChange={(e) => setName(e.target.value)}
//         className="text-black "
//       ></input>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         // onChange={(e) => e.target.value}
//         onChange={(e) => setEmail(e.target.value)}
//         className="text-black "
//       ></input>
//       <textarea
//         type="text"
//         placeholder="Message"
//         value={message}
//         // onChange={(e) => e.target.value}
//         onChange={(e) => setMessage(e.target.value)}
//         className="text-black "
//       ></textarea>
//       <button type="submit">submit</button>
//     </form>
//   );
// }

import * as React from "react";

export const EmailTemplate = ({ firstName, lastName, email, message }) => {
  return (
    <div>
      <h2>You received a new message</h2>
      <p>
        <span>First name: </span>
        <strong> {firstName}</strong>
        <span>Last name: </span>
        <strong> {lastName}</strong>
        <span>Email: </span>
        <strong> {email}</strong>
        <span>Message: </span>
        <strong> {message}</strong>
      </p>
    </div>
  );
};
