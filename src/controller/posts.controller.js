const postsService = require('../service/posts.service');

const postCreator = async (req, res) => {
  const { body } = req;

  const { id } = req.user;
  const obj = { ...body, userId: id };

    const newPost = await postsService.postCreator(obj);
   return res.status(201).json(newPost);
};

module.exports = { postCreator }; 