const filesystem = require('fs');
const dotenv = require('dotenv');
const { Schema, model, connect } = require('mongoose');

dotenv.config();

const connectToDB = () => {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  return connect(process.env.DATABASE, options);
};
