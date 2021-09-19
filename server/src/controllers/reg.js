const RegisterEventModels = require("../models/Register_event/register_event");

const InsertRegisterEvent = async (req, res) => {
    const { body } = req;
    const result = await RegisterEventModels.insertRegisterEvent(body);
    res.send(result);
  };

  module.exports ={
    InsertRegisterEvent
  }
  