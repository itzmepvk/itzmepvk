// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendEmail } from "../../lib/email";

export default async function handler(req, res) {
  const { email, message, name } = req.body;
  await sendEmail({
    from: email,
    to: "itzmepvk@gmail.com",
    subject: name,
    html: `<div><span>from: [${email}]</span> <p>${message}</p></div>`,
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
