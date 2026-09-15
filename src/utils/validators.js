export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone);
};

export const isValidPassword = (password) => {
  return password && password.length >= 6;
};

export const isRequired = (value) => {
  return value && value.trim().length > 0;
};