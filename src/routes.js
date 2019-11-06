const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");
const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardCotroller");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig); //passando a configuração dos arquivos(multer)

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotController.store); //passar como 2º parametro o campo onde será upado os arquivos

routes.get("/spots", SpotController.index); //listagem de spots

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store); //cria um reserva de spot

module.exports = routes;
