import mongoose from 'mongoose';

const holidayScehma = new mongoose.Schema({
    name:String,
    description:String,
    country:{
        id:String,
        name:String
    },
    date:{
        iso:String,
        datetime:{
            year:Number,
            month:Number,
            day:Number,
            year:Number,
            minute:Number,
            second:Number
        },
        timezone:{
            offset:String,
            zoneabb:String,
            zoneoffset:Number,
            zonedst:Number,
            zonetotaloffset:Number
        }
    },
    type:[],
    primary_type:String,
    canonical_url:String,
    urlid:String,
    locations:String,
    states:String
});

const Holiday = mongoose.model('Holiday', holidayScehma);

export default Holiday;