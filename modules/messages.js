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
        text: "Join us for the annual company picnic next Friday at Central Park. There will be games, food, and fun activities for everyone. Family members are welcome. Please RSVP by Wednesday so we can finalize the arrangements.",
        user: "Bobby Shmurda (HR)",
        added: formatDate(new Date()),
      },
      {
        text: "The system will be down for maintenance on Saturday from 2 AM to 6 AM. During this time, you will not be able to access the network or any online services. Please save your work and log off before the maintenance period.",
        user: "Joe Schmoe",
        added: formatDate(new Date()),
      },
      {
        text: "Don't forget about the meeting scheduled for tomorrow at 10 AM in the main conference room. We will be discussing the project timelines and assigning new tasks. Your presence is highly appreciated.",
        user: "Jane Doe (CFO)",
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
