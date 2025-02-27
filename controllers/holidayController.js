import Holiday from '../models/holiday.js'

const api = process.env.holidayApi;
    
const postData = async () => {
    const response = await fetch(api);
    const holidayData = response.json();
    console.log(response)

    const { name, description, country, date, type, primary_type, canonical_url, urlid, locations, states} = holidayData
    const newData = new Holiday({
        name, description, country, date, type, primary_type, canonical_url, urlid, locations, states
    })
    newData.save();
}

const findAll = async (req,res) => {
    // const no_of_docs_each_page = 2; 
    // const current_page_number = 1;

    const allHoliday = await Holiday.find();

    res.send(allHoliday);
}

const deleteAll = async () => {
    await Holiday.deleteMany();
}

const holidayRoute =  { postData, findAll, deleteAll }

export default holidayRoute;