const userService = require('../service/user.service');
// const errorMap = require('../utils/errorMap'); 

const createUser = async (req, res) => {
  const { body } = req;
 const { message } = await userService.createUser(body);

//  if (type) return res.status(errorMap.mapError(type)).json({ message });
//  console.log(type);
 console.log(message);
 return res.status(201).json(message);
};

module.exports = { createUser };