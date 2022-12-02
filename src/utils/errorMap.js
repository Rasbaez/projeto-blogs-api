const errorMap = {
  FAIL_ON_CREATE_USER: 404,
  USER_NOT_FOUND: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = { errorMap, mapError };