var mongoose = require('mongoose');
var express = require('express');
var bcrypt = require('bcryptjs');
var crypto = require('crypto');


var userSchema = mongoose.Schema({
  username: {type: Number}
})
