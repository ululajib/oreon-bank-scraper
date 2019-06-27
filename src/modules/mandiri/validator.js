const BaseJoi = require('joi');
const moment = require('moment');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
const validator = {
  checkCredentials,
  getMutasi,
}
module.exports = validator;
const dateFormats = ['YYYYMMDD', 'DD-MM-YYYY', 'YYYY-MM-DD', 'YYYY-MM-DDTHH:mm:ss.SSSZ'];
const todayDate = moment().format('M-D-YYYY');
const dateScheme = Joi.date().format(dateFormats);
const dateSchemeMaxNow = Joi.date().max(todayDate);
const credentialsScheme = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
  Cookie: Joi.any().optional(),
  cookieString: Joi.string().allow('')
});
const getMutasiScheme = Joi.object().keys({
  endOfMonth: dateScheme,
  from_date: dateScheme.concat(dateSchemeMaxNow).default(todayDate),
  to_date: dateScheme.min(Joi.ref('from_date'))
    .max(Joi.ref('endOfMonth'))
    .default(todayDate),
})
const schemes = {
  credentialsScheme,
  getMutasiScheme,
}
function getMutasi(query) {
  return Joi.validate(query, schemes.getMutasiScheme);
}
function checkCredentials(query) {
  return Joi.validate(query, schemes.credentialsScheme);
}
