const express = require("express");

const OngValidation = require("./validations/OngValidation");
const ProfileValidation = require("./validations/ProfileValidation");
const IncidentValidation = require("./validations/IncidentValidation");
const SessionValidation = require("./validations/SessionValidation");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post(
  "/sessions",
  SessionValidation.createSession(),
  SessionController.create
);

routes.get(
  "/ongs", 
  OngController.index
);
routes.post(
  "/ongs", 
  OngValidation.createOng(), 
  OngController.create
);

routes.get(
  "/profile",
  ProfileValidation.indexProfile(),
  ProfileController.index
);

routes.get(
  "/incidents",
  IncidentValidation.indexIncidents(),
  IncidentController.index
);
routes.post(
  "/incidents",
  IncidentValidation.createIncident(),
  IncidentController.create
);
routes.delete(
  "/incidents/:id",
  IncidentValidation.deleteIncident(),
  IncidentController.delete
);

module.exports = routes;
