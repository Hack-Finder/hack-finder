const { Schema, model } = require('mongoose');
const axios = require('axios');
const User = require('./User');

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
  try {
    if (this.mode === 'Online' || this.location.length < 5) return n();

    const res = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.location}.json?access_token=${process.env.MAPBOX_TOKEN}`
    );

    if (res.data.features[0].center) {
      this.coordinates = res.data.features[0].center;
    }

    n();
  } catch (err) {
    n();
  }
});

eventSchema.pre('save', function (n) {
  this.deadline = new Date(this.deadline);
  if (this.deadlineB) this.deadlineB = new Date(this.deadlineB);
  n();
});

eventSchema.pre('save', function (n) {
  this.deadline = new Date(this.deadline);
  if (this.deadlineB) this.deadlineB = new Date(this.deadlineB);
  n();
});

eventSchema.pre('save', async function (n) {
  if (!this.isNew) return;
  const documentId = this._id;

  var update = { $addToSet: { eventsCreated: documentId } };
  var options = { upsert: true, new: true, setDefaultsOnInsert: true };

  await User.findByIdAndUpdate(this.creator, update, options);
});

eventSchema.pre('save', async function (n) {
  if (!this.isNew) return;

  if (!this.banner.imgPath) {
    this.banner = {
      imgName: 'Banner Event Calender',
      imgPath:
        'https://res.cloudinary.com/dvofkuyja/image/upload/v1615450629/startup-calender/default_banner_kpeh3y.jpg',
      publicId: null,
    };
  }
  n();
});

const Event = model('Event', eventSchema);

module.exports = Event;
