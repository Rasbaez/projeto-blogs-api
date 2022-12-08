const { PostCategory, BlogPost, User, Category } = require('../models');

const postCreator = async ({ title, content, categoryIds, userId }) => {
  const newPost = await BlogPost.create({ title, content, categoryIds, userId });

  categoryIds.forEach((category) => (
    PostCategory.create({ postId: newPost.id, categoryId: category })
  ));

  return newPost;
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    attributes: { exclude: ['userId'] },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
    
  });
      
  if (!posts) return { type: 'POSTS_NOT_FOUND', message: 'No posts found' };

    return { type: null, message: posts };
};

module.exports = { 
  postCreator,
   getPosts,
   };