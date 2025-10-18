import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // serviço de e-mail (SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.seudominio.com",
      port: 587,
      secure: false, // true para 465, false para outras portas
      auth: {
        user: "seu-email@seudominio.com", // e-mail de envio
        pass: "sua-senha", // sua senha
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: "seu-email-de-destino@seudominio.com", // E-mail que receberá as mensagens
        subject: `Novo Contato de ${name}`,
        html: `<p><strong>Nome:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mensagem:</strong> ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, error: "Erro ao enviar o e-mail." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
  