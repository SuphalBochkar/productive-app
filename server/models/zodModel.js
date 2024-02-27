const zod = require("zod");

const userZodSignup = zod.object({
  username: zod.string(),
  email: zod.string(),
  password: zod.string(),
  confirmPassword: zod.string(),
});

const userZodSignin = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

module.exports = {
  userZodSignup,
  userZodSignin,
};
