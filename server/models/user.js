var mongoose = require('mongoose');
var express = require('express');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');


var UserSchema = mongoose.Schema({
  username: {type: Number, required: true},
  password: {type: String},
  zipcode: {type: String, required: true},
  temp_pref: {type: String, required: true},
  is_admin: {type: Number, default: 0},
  text_opt_in: {type: Number, default: 0}
}, { timestamps: true });

UserSchema.pre('save', function(next){
  if( this.isModified('password') ){
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

UserSchema.methods.authenticate = function(passwordTry){
  return bcrypt.compareSync(passwordTry, this.password);
};

module.exports = mongoose.model('User', UserSchema);
