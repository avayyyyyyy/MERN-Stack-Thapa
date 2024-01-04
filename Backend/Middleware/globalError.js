const globalError = (err, req, res, next) => {
  console.log("Global Middleware Encountered");
  next();
};

module.exports = globalError;
