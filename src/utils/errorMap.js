const errorMap = {
  FAIL_ON_CREATE_USER: 404,
  USER_NOT_FOUND: 400,
  USERS_NOT_FOUND: 400,
  USERID_NOT_FOUND: 404,
  CATEGORY_NOT_REGISTRED: 400,
  CATEGORIES_NOT_FOUND: 400,
  POSTS_NOT_FOUND: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = { errorMap, mapError };