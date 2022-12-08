const { PostCategory, BlogPost } = require('../models');

const postCreator = async ({ title, content, categoryIds, userId }) => {
  const newPost = await BlogPost.create({ title, content, categoryIds, userId });

  categoryIds.forEach((category) => (
    PostCategory.create({ postId: newPost.id, categoryId: category })
  ));

  return newPost;
};

module.exports = { postCreator };