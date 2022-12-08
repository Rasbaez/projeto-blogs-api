const postsService = require('../service/posts.service');
const { errorMap } = require('../utils/errorMap');

const postCreator = async (req, res) => {
  const { body } = req;

  const { id } = req.user;
  const obj = { ...body, userId: id };
// fazer tratamento de erro aqui!
    const newPost = await postsService.postCreator(obj);
   return res.status(201).json(newPost);
};

const getPosts = async (_req, res) => {
 const { type, message } = await postsService.getPosts();

 if (type) return res.status(errorMap.mapError(type)).json({ message });
 
 return res.status(200).json(message);
};

module.exports = { 
  postCreator,
  getPosts,
 }; 