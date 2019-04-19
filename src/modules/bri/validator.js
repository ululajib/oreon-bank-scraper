const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
const validator = {
  checkCredentials,
}
module.exports = validator;
const credentialsScheme = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
  cookie: Joi.string().allow('')
});
const schemes = {
  credentialsScheme,
}
function checkCredentials(query) {
  return Joi.validate(query, schemes.credentialsScheme);
}
