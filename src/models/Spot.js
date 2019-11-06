const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
  thumbnail: String, //nome da imagem da empresa
  company: String, //empresa
  price: Number, //preços
  techs: [String], //teconologias que a empresa trabalha
  user: {
    type: mongoose.Schema.Types.ObjectId, //reprentando um relacionamento, ou seja o usuário que criou
    ref: "User" //(referencia para o model usuario)
  }
});

module.exports = mongoose.model("Spot", SpotSchema);
