const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  usuario: {
    type: String,
    required: true,
    unique: true, 
  },
  senha: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
});

const UserModel = mongoose.model('Usuario', userSchema);

module.exports = UserModel;
