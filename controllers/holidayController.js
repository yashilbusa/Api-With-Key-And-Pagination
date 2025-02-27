import Holiday from '../models/holiday.js'

const api = process.env.holidayApi;
    
const postData = async (req,res) => {
    const response = await fetch(api);
    const holidayData = response.json();

    const { name, description, country, date, type, primary_type, canonical_url, urlid, locations, states  } = holidayData;
    const newData = new Holiday({
        name, description, country, date, type, primary_type, canonical_url, urlid, locations, states
    })
    newData.save();
}

const findAll = async (req,res) => {
    const allHoliday = await Holiday.aggregate([
        
    ]);
    res.send(allHoliday);
}

const deleteAll = async (req,res) => {
    await Holiday.deleteMany();
}

const holidayRoute =  { postData, findAll, deleteAll }

export default holidayRoute;