import Holiday from '../models/holiday.js'

const api = process.env.holidayApi;
    
const postData = async () => {
    const response = await fetch(api);
    const holidayData = response.json();

    const { name, description, country, date, type, primary_type, canonical_url, urlid, locations, states  } = holidayData;
    const newData = new Holiday({
        name, description, country, date, type, primary_type, canonical_url, urlid, locations, states
    })
    newData.save();
}

const findAll = async () => {
    const allHoliday = await Holiday.find();
    res.send(allHoliday);
}

const holidayRoute =  { postData, findAll }

export default holidayRoute;