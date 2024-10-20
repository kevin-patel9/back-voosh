const mongoose = require("mongoose");
require('dotenv').config({ path: "./config/config.env" });

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => console.log(`Database connnected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
