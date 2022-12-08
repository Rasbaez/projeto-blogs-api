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

const getPosts = async (req, res) => {
    const { type, message } = await postsService.getPosts();
    if (type) return res.status(errorMap.mapError(type)).json({ message });

   return res.status(200).json(message);
};

const getpPostsById = async (req, res) => {
  const { id } = req.params;

  const post = await postsService.getPostById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(post);
 };

 const updatePost = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  
  const result = await postsService.updatePost(id, body);

  return res.status(200).json(result);
 };

module.exports = { 
  postCreator,
  getPosts,
  getpPostsById,
  updatePost,
 }; 