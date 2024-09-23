// config/plugins.js

module.exports = ({ env }) => ({
    email: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env.int("SMTP_PORT", 587), // Use 465 for secure connection or 587 for startTLS
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        // Use secure connection for Gmail
        secure: env.bool("SMTP_SECURE", true),
      },
      settings: {
        defaultFrom: env("SMTP_DEFAULT_FROM", "noreply@quorixia.com"),
        defaultReplyTo: env("SMTP_DEFAULT_REPLY_TO", "noreply@quorixia.com"),
      },
    },
  });