import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();
  console.log("body ->", body);
  try {
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
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
