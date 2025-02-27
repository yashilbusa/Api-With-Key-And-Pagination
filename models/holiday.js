import mongoose, { Mongoose } from 'mongoose';

const countrySchema = new mongoose.Schema({
    id:String,
    name:String
})

const dateTimeSchema = new mongoose.Schema({
    year:Number,
    month:Number,
    day:Number,
    minute:Number,
    second:Number
})

const timezoneSchema = new mongoose.Schema({
    offset:String,
    zoneabb:String,
    zoneoffset:Number,
    zonedst:Number,
    zonetotaloffset:Number
})

const dateSchema = new mongoose.Schema({
    iso:String,
    datetime:{type:dateTimeSchema},
    timezone:{type:timezoneSchema}
})

const holidayScehma = new mongoose.Schema({
    name:String,
    description:String,
    country:{ type: countrySchema },
    date:{ type:dateSchema },
    type:[String],
    primary_type:String,
    canonical_url:String,
    urlid:String,
    locations:String,
    states:String
});

const Holiday = mongoose.model('Holiday', holidayScehma);

export default Holiday;