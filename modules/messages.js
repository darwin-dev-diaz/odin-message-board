const formatDate = require("../util/formateDate");
class MessageService {
  constructor() {
    this.messages = [
      {
        text: "Don't give up. We are so close to finishing TOP. I know you'll land your software job. You didn't come this far to give up. ✅ 👍",
        user: "Darwin (Creator)",
        added: formatDate(new Date()),
      },
      {
        text: "Hi there! 🤣",
        user: "Amando",
        added: formatDate(new Date()),
      },
      {
        text: "Hello World! 🤓 🌍",
        user: "Charles",
        added: formatDate(new Date()),
      },
    ];
  }

  getMessages() {
    return this.messages;
  }

  addMessage(newMessageObj) {
    this.messages.push(newMessageObj);
  }
}

module.exports = new MessageService();
