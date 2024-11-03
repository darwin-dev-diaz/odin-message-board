const messageService = require("../modules/messages");

module.exports = {
  get: (req, res) => {
    res.render("messages", { messages: messageService.getMessages() });
  },
};
