const {checkSchema} = require('express-validator/check');

module.exports = checkSchema({
  name: {
    in: 'body',
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_MISSING_NAME'),
    },
  },
  phone: {
    in: 'body',
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_MISSING_PHONE'),
    },
  },
  email: {
    in: 'body',
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_MISSING_EMAIL'),
    },
    isEmail: {
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_INVALID_EMAIL'),
    },
  },
  street_address: {
    in: 'body',
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_MISSING_ADDRESS'),
    },
  },
  street_address_2: {
    in: 'body',
    trim: true,
    optional: true,
  },
  city: {
    in: 'body',
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_MISSING_CITY'),
    },
  },
  state: {
    in: 'body',
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_MISSING_STATE'),
    },
  },
  zipcode: {
    in: 'body',
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_MISSING_ZIPCODE'),
    },
  },
  merchant_id_ein: {
    in: 'body',
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_MISSING_MERCHANT_ID_EIN'),
    },
  },
  store_profile: {
    in: 'body',
    trim: true,
    optional: true,
  },
  store_identifier: {
    in: 'body',
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.STORE_MISSING_STORE_IDENTIFIER'),
    },
  },
  image: {
    in: 'body',
    trim: true,
    optional: true,
  },
  tax: {
    in: 'body',
    trim: true,
    isEmpty: {
      negated: true,
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.MISSING_TAX_RATE'),
    },
    isFloat: {
      options: [{
        min: 0,
      }],
      errorMessage: (value, {req}) => req.__('VAL_ERRORS.INVALID_TAX_RATE'),
    },
  },
});
