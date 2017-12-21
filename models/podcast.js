// mongodb model for podcast
'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const podcastSchema = new Schema({
  caster      : {type: Schema.Types.ObjectId, ref: 'User'},
  audioUrl    : String,
  title       : String,
  duration    : Date,
  likers      : [{type: Schema.Types.ObjectId, ref: 'User'}]
});

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;