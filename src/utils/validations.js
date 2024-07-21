const Validator = require('validatorjs');

const validate = (data, rules, customMessages, callback) => {
  let validation = new Validator(data, rules, customMessages);

  validation.passes(() => callback(null, true));
  validation.fails(() => callback(validation.errors, false));
};

module.exports = validate;