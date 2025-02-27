import Holiday from '../models/holiday.js'

const api = process.env.holidayApi;
    
const postData = async () => {
    const response = await fetch(api);
    const holidayData = await response.json();
    console.log(holidayData)

    // const { name, description, country, date, type, primary_type, canonical_url, urlid, locations, states } = holidayData
    
    // for (let i = 0; i < holidayData.length; i++) {
    //     const newData = new Holiday({
    //         name:holidayData[i]['name'],
    //         description:holidayData[i]['description'], 
    //         country:holidayData[i]['country'], 
    //         date:holidayData[i]['date'], 
    //         type:holidayData[i]['type'], 
    //         primary_type:holidayData[i]['primary_type'], 
    //         canonical_url:holidayData[i]['canonical_url'], 
    //         urlid:holidayData[i]['urlid'], 
    //         locations:holidayData[i]['locations'], 
    //         states:holidayData[i]['states']
    //     })
    //     newData.save();
    // }

    const newData = new Holiday({
        name:holidayData.name, 
        description:holidayData.description, 
        country:holidayData.country, 
        date:holidayData.date, 
        type:holidayData.type, 
        primary_type:holidayData.primary_type, 
        canonical_url:holidayData.canonical_url, 
        urlid:holidayData.urlid, 
        locations:holidayData.locations, 
        states:holidayData.states
    })
    newData.save();
}

const findAll = async (req,res) => {

    const allHoliday = await Holiday.find();

    res.send(allHoliday);
}

const deleteAll = async () => {
    await Holiday.deleteMany();
}

const holidayRoute =  { postData, findAll, deleteAll }

export default holidayRoute;