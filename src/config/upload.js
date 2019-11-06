const multer = require("multer");
const path = require("path");

module.exports = {
  //define as configurações de multer
  storage: multer.diskStorage({
    //especifica o tipo de armazenamento (em disco)
    destination: path.resolve(__dirname, "..", "..", "uploads"), //especifica o local a salvar o arquivo (multiplataforma)
    filename: (req, file, cb) => {
      //cb: callback(função chamada assim que o nome do arquivo estiver pronto)
      const ext = path.extname(file.originalname); //função define extensão do arquivo
      const name = path.basename(file.originalname, ext); //função que retorna o nome de uma imagem sem extensão, no 2º parametro a extensão
      cb(null, `${name}-${Date.now()}${ext}`); //fieldname: nome do arquivo que veio do cliente + data atual + extensão do arquivo
    }
  })
};
