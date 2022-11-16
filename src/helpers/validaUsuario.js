const Joi = require('joi');

const PASSWORD = '400|"password"';
const EMAIL = '400|"email"';
const IS_REQUIRED = ' is required';
const DISPLAYNAME = '400|"displayName"';
const MUST_BE_A_VALID_EMAIL = ' must be a valid email';
const LENGT_MUST_BE_AT_LEAST_6_CHARACTERS_LONG = ' length must be at least 6 characters long';
const LENGTH_MUST_BE_AT_LEAST_8_CHARACTERS_LONG = ' length must be at least 8 characters long';
module.exports = Joi.object({
  displayName: Joi.string()
  .min(8)
  .required()
  .messages({
    'any.required': DISPLAYNAME + IS_REQUIRED,
    'string.min': DISPLAYNAME + LENGTH_MUST_BE_AT_LEAST_8_CHARACTERS_LONG,
  }),
  email: Joi.string()
  .email()
  .required()
  .messages({
    'any.required': EMAIL + IS_REQUIRED,
    'string.email': EMAIL + MUST_BE_A_VALID_EMAIL,
  }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'any.required': EMAIL + IS_REQUIRED,
      'string.min': PASSWORD + LENGT_MUST_BE_AT_LEAST_6_CHARACTERS_LONG,
    }),
  image: Joi.string()
    .required(false),
});

/*
* Joi.object é um objeto que recebe um objeto como parâmetro.
* ( Codido criado com o auxilio do colega da turma, José Cleiton Cerqueira )
*/