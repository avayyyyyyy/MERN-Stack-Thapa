const z = require("zod");

const validateUser = z.object({
  username: z
    .string()
    .min(3, { message: "username must be of minimum 8 characters" }),
  email: z.string().email({ message: "Enter a valid email" }),
  phone: z
    .string()
    .min(10, { message: "Phone Number does not exceed 10 numbers" })
    .max(10),
  password: z
    .string()
    .min(8, { message: "password must be of minimum 8 characters" })
    .max(16, { message: "password must be of maximum 8 characters" }),
});

module.exports = validateUser;
