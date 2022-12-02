const errorMap = {
  FAIL_ON_CREATE_USER: 404,
  USER_NOT_FOUND: 400,
  USERS_NOT_FOUND: 400,
  USERID_NOT_FOUND: 404,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = { errorMap, mapError };