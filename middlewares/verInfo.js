const verInfoRequest = (req, res, next) => {
  console.log(`Petición recibida desde ${req.ip}`);
  next();
};

module.exports = verInfoRequest;
