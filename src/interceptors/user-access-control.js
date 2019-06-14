const Promise = require('bluebird');
const {Error} = require('../helpers');

module.exports = (req, res, next) => {
  new Promise(async (resolve, reject) => {
    // load account from req
    const acc = req.user_acc;
    const {id} = req.params;
    if (acc.id === id) {
      resolve(acc);
    } else {
      // Make sure that token is authorized to access resource associated with account id
      reject(Error.Unauthorized(res.__('DEFAULT_ERRORS.INVALID_AUTH')));
    }
  }).asCallback((err) => {
    if (err) {
      next(err);
    } else {
      next();
    }
  });
};
