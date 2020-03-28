const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  indexProfile() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    });
  }
};
