import nodemailer from "nodemailer";

// Replace with your SMTP credentials
const smtpOptions = {
  service: "gmail",
  auth: {
    user: "dev.itzmepvk@gmail.com",
    pass: "bkgayleemrvjubiq",
  },
};

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  await transporter.sendMail({
    from: `"ITZMEPVK.com" <dev.itzmepvk@gmail.com>`,
    to: options.to,
    subject: `Message from ${options.subject}`,
    html: options.html,
  });
};
