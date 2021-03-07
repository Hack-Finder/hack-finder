const { Schema, model } = require('mongoose');
const axios = require('axios');

const eventSchema = new Schema({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  rewardsDescription: {
    type: String,
    trim: true,
  },
  priceMoney: String,
  priceSpace: String,
  priceMentorship: String,
  deadline: {
    type: Date,
    required: true,
  },
  deadlineDescription: {
    type: String,
    required: true,
  },
  deadlineB: {
    type: Date,
  },
  deadlineDescriptionB: {
    type: String,
  },
  location: String,
  coordinates: [Number],
  mode: String,
  category: [String],
  industry: String,
  banner: {
    imgName: String,
    imgPath: String,
    publicId: String,
  },
  twitter: String,
  instagram: String,
  facebook: String,
  homepage: String,
  featured: {
    type: Boolean,
    default: false,
  },
  creator: { type: Schema.ObjectId, ref: 'User' },
  participants: [{ type: Schema.ObjectId, ref: 'User' }],
});

eventSchema.pre('save', async function (n) {
  if (this.mode === 'Online') return n();

  const res = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.location}.json?access_token=${process.env.MAPBOX_TOKEN}`
  );
  this.coordinates = res.data.features[0].center;

  n();
});

eventSchema.pre('save', function (n) {
  this.deadline = new Date(this.deadline);
  if (this.deadlineB) this.deadlineB = new Date(this.deadlineB);
  n();
});

const Event = model('Event', eventSchema);

module.exports = Event;
