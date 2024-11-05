class MessageService {
  constructor() {
    this.messages = [
      {
        text: "Hi there!",
        user: "Amando",
        added: new Date().toLocaleString(),
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date().toLocaleString(),
      },
    ];
  }

  getMessages() {
    return this.messages;
  }

  addMessage(newMessageObj) {
    this.messages.push(newMessageObj);
  }
  removeMessage(messageId) {
    if (messageId >= 0 && messageId < this.messages.length) {
      this.messages.splice(messageId, 1);
    } else {
      throw new Error("Invalid message ID");
    }
  }
}

module.exports = new MessageService();
