const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,

  user: {
    type: mongoose.Schema.Types.ObjectId, //reprentando um relacionamento, ou seja o usuário que criou
    ref: "User" //(referencia para o model usuario)
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId, //representando o spot selecionado pelo usuário
    ref: "Spot"
  }
});

module.exports = mongoose.model("Booking", BookingSchema);
