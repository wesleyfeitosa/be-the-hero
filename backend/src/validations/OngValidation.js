const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  createOng() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().regex(/\(\d{2,}\) \d{4,}\-\d{4}/),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      }),
    })
  }
}