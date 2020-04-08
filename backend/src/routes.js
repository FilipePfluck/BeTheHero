const express = require("express");
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

//logar
routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  })
}), SessionController.create);

//listar ongs
routes.get('/ongs', OngController.index);

//criar ongs
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().length(10),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), OngController.create);

//página do perfil
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

//listar incidentes
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), IncidentController.index);

//criar incidente
routes.post('/incidents', celebrate({
  [Segments.BODY]:Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  })
}),IncidentController.create);

//deletar incidente
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

module.exports = routes;