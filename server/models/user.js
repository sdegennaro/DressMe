var mongoose = require('mongoose');
var express = require('express');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');


var userSchema = mongoose.Schema({
  username: {type: Number, required: true, minlength: 10, maxlength: 10},
  password: {type: String, required: true},
  zipcode: {type: Number, required: true, minlength: 5, maxlength: 5},
  temp_pref: {type: String, required: true},
  is_admin: {type: Number, default: 0},
  text_opt_in: {type: Number, default: 0}
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
