const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

class TelegramController {
  static async sendMessage(req, res) {
    const { name, email, message } = req.body;
    const text = `📨 *Nova mensagem recebida!*\n`
      + `\nOlá, alguém enviou uma mensagem para você!`
      + `\n\n🕒 *Data:* ${new Date().toLocaleString("pt-BR")}`
      + `\n👤 *Nome:* ${name}`
      + `\n📧 *Email:* ${email}`
      + `\n✒️ *Mensagem:* ${message}`;

    try {
      await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown',
      });

      res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Erro ao enviar a mensagem. ' });
    }
  }
}

module.exports = TelegramController;