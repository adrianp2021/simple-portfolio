// import { EmailTemplate } from "../../components/emailTemplate";
// import { Resend } from "resend";

// //
// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   const body = await req.json();
//   console.log("body ->", body);
//   try {
//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["adrianpantea10@gmail.com"],
//       subject: "Hello world",
//       react: EmailTemplate({
//         name: body.name || "empty",
//         email: body.email || "empty",
//         message: body.message || "empty",
//       }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "API key missing" });
  }

  if (req.method === "POST") {
    try {
      const body = req.body;
      console.log("body ->", body);

      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["adrianpantea10@gmail.com"],
        subject: "Hello world",
        react: EmailTemplate({
          name: body.name || "empty",
          email: body.email || "empty",
          message: body.message || "empty",
        }),
      });

      if (error) {
        return res.status(500).json({ error });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
