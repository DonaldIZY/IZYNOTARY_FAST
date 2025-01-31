import { Injectable } from '@nestjs/common';
import { strict } from 'assert';
import * as nodemailer from 'nodemailer';
@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Remplace avec ton service SMTP (ex: smtp.gmail.com)
      port: 465, // 465 si SSL, 587 si TLS
      secure: true, // true pour SSL, false pour TLS
      auth: {
        user: 'izytechnology225@gmail.com', // Remplace par ton email
        pass: 'pmwc cvbh ryoz shsd', // Remplace par ton mot de passe
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string, html?: string) {
    try {
    await this.transporter.sendMail({
      from: '"IzyNotary" <izytechnology225@gmail.com>',
      to,
      subject,
      text,
      html,
    });
    //return { success: true, message: '✅ Email envoyé avec succès !' }; // ✅ Succès
    console.log('mail sent successfully');
    } catch (error) {
      console.error('❌ Erreur lors de l’envoi de l’email :', error);
      return { success: false, message: `❌ Échec de l’envoi de l’email : ${error.message}` }; // ❌ Échec
    }
  } 
}
