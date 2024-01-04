const z = require("zod");

let messageValidate = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  message: z
    .string()
    .max(255, { message: "message doesn't exeed character limit" }),
});

module.exports = messageValidate;
