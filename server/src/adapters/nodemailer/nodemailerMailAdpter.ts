import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from '../mailAdapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData)  {

    await transport.sendMail({
      from: 'FeedGet Team <noreply@feedget.com>',
      to: 'Eduardo Oliveira <eduardo@test.com>',
      subject,
      html: body
    });
  };
}