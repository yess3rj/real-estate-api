import joi from "joi";

const now = Date.now();
const adultAge = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18);

const createUserValidator = async (req, res, next) => {
  const userSchema = joi.object({
    name: joi.string().required().empty("").min(3).max(50),
    lastName: joi.string().required().empty("").min(3).max(50),
    birthday: joi.date().required().less(adultAge).greater("1-1-1934"),
    dni: joi.string().required().empty(""),
    phoneNumber: joi.string().min(8).max(10),
    email: joi.string().required().email().empty().trim(),
    address: joi.string().required(),
    password: joi.string().empty().min(4).max(30).trim().required(),
    contacts: joi.array().required()
  });
  try {
    await userSchema.validateAsync(req.body)
    next();
  } catch (error) {
    return res.status(400).json({
        msg: "Datos incorrectos",
        error,
      });
  }
};

export {createUserValidator}