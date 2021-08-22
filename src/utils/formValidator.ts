export const emailRegex =
  /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([a-z]|[A-Z]|\d|!|@|#|\$|%|\^|&|\*){8,}$/;

export const WEIGHTAGE_VALIDATION_RULES = {
  required: true,
  min: 0,
  max: 100,
};

export const OVERALL_SCORE_VALIDATION_RULES = {
  required: true,
  min: 0,
  max: 10,
};

export const REQUIRED_VALIDATION_RULES = {
  required: true,
};

export const EMAIL_VALIDATION_RULES = {
  required: true,
  pattern: emailRegex,
};

export const isValidEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return passwordRegex.test(password);
};

export const hasEmptyField = (object: any): boolean => {
  return Object.values(object).some(
    (value) => value === null || value === undefined || value === ""
  );
};

export default {
  isValidEmail,
  isValidPassword,
  hasEmptyField,
};
