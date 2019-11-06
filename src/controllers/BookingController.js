const Booking = require("../models/Booking");

module.exports = {
  //criar uma reserva
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });

    await booking
      .populate("spot")
      .populate("user")
      .execPopulate(); //popuando as tabelas de reservas

    return res.json(booking);
  }
};
