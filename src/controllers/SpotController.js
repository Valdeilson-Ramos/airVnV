const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    //listagem de spots ordenando por tecnologia
    const { tech } = req.query; //armazena a tecnologia informada na query

    const sposts = await Spot.find({ techs: tech }); //busca a tecnologia solicitada dentro do array salvo

    return res.json(sposts); //retorna as tecnologia encontradas
  },

  async store(req, res) {
    //criação de spots
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    //validação para usuário
    const user = await User.findById(user_id);

    if (!user) {
      //se o usuário já existe
      return res.status(400).json({ error: "User does not exists" });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map(tech => tech.trim()), //percorre o array de tecnologias separando por virgula e removendo os espaços
      price
    });

    return res.json(spot);
  }
};
