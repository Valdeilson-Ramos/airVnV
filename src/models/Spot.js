const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String, //nome da imagem da empresa
    company: String, //empresa
    price: Number, //preços
    techs: [String], //teconologias que a empresa trabalha
    user: {
      type: mongoose.Schema.Types.ObjectId, //reprentando um relacionamento, ou seja o usuário que criou
      ref: "User" //(referencia para o model usuario)
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);
SpotSchema.virtual("thumbnail_url").get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Spot", SpotSchema);
