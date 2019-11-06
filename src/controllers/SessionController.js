const User = require("../models/User");

module.exports = {
  async store(req, res) {
    //metodo asincrono para criar um novo usuário
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      //verifica se o usuário já existe
      user = await User.create({ email }); //caso não exista, cria-o
    }
    return res.json(user);
  }
};
