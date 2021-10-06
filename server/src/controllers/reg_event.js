const RegisterEventModels = require("../models/Register_event/register_event");

const InsertRegisterEvent = async (req, res) => {
    const { body } = req;
    const result = await RegisterEventModels.insertRegisterEvent(body);
    res.send(result);
  };

  const getEventList = async (req, res) => {
    const result = await RegisterEventModels.getEventList();
    console.log(result);
    res.send(result);
  }

  module.exports ={
    InsertRegisterEvent,
    getEventList
  }
  