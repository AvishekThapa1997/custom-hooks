const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const passwordRegex = /^[A-Z]+[A-Za-z\d@_$]+$/g;

const isNotNullOrEmpty = (value) => {
  return value !== null && value !== undefined && value !== '';
};

const isValidEmail = (email) => {
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  return passwordRegex.test(password);
};

const isPassowrdContainMinChars = (password) => {
  return password.length >= 8;
};
export {
  isValidEmail,
  isNotNullOrEmpty,
  isValidPassword,
  isPassowrdContainMinChars,
};
