import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';


const countrySchema = new mongoose.Schema({
  id: String,
  name: String
});

const dateTimeSchema = new mongoose.Schema({
  year: Number,
  month: Number,
  day: Number,
  minute: Number,
  second: Number
});

const timezoneSchema = new mongoose.Schema({
  offset: String,
  zoneabb: String,
  zoneoffset: Number,
  zonedst: Number,
  zonetotaloffset: Number
});

const dateSchema = new mongoose.Schema({
  iso: String,
  datetime: { type: dateTimeSchema },
  timezone: { type: timezoneSchema }
});

const holidaySchema = new mongoose.Schema({
  name: String,
  description: String,
  country: { type: countrySchema },
  date: { type: dateSchema },
  type: [String],
  primary_type: String,
  canonical_url: String,
  urlid: String,
  locations: String,
  states: String
});

holidaySchema.plugin(paginate);

const Holiday = mongoose.model('Holiday', holidaySchema);

export default Holiday;