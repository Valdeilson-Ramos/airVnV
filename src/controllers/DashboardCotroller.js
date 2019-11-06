const Spot = require("../models/Spot");

module.exports = {
  //metodo que exibe a dashboard de spots
  async show(req, res) {
    const { user_id } = req.headers; //recebe o id do usuário no cabeçalho

    const spots = await Spot.find({ user: user_id }); //busca todos os spots do usuário recebido

    return res.json(spots);
  }
};
