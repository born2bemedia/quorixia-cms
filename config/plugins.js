module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.gmail.com'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          secure: env('SMTP_SECURE', false),
        },
        settings: {
          defaultFrom: 'noreply@quorixia.com',
          defaultReplyTo: 'noreply@quorixia.com',
        },
      },
    },
    // ...
  });