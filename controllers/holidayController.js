import Holiday from '../models/holiday.js';

const api = process.env.holidayApi;

const postData = async () => {
    try {
      const response = await fetch(api);
      const holidayData = await response.json();
      
      console.log(holidayData);
  
      const holidays =  holidayData.response.holidays;
  
      console.log(holidays);
  
      for (let i = 0; i < holidays.length; i++) {
        const holiday = holidays[i];
  
        const newHoliday = new Holiday({
          name: holiday.name,
          description: holiday.description,
          country: holiday.country,
          date: holiday.date,
          type: holiday.type,
          primary_type: holiday.primary_type,
          canonical_url: holiday.canonical_url,
          urlid: holiday.urlid,
          locations: holiday.locations,
          states: holiday.states,
        });
  
        await newHoliday.save();
      }
      console.log('Holiday Data Saved Successfully.');
    } catch (err) {
      console.error('Error in Posting data:', err);
    }
  };

  const findAll = async (req, res) => {
    try {
        // let page = Number(req.query.page) || 1;
        // let limit = Number(req.query.limit) || 5;

        // const skip = (page - 1) * limit;

        // const totalDocs = await Holiday.countDocuments();
        // const totalPages = Math.ceil(totalDocs / limit);
        // const holidays = await Holiday.find().skip(skip).limit(limit);

        // res.json({ holidays, totalPages, currentPage: page});



        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 15;

        const holidays = await Holiday.paginate({}, { page, limit });
        res.json(holidays);

    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch holidays' });
    }
};

const deleteAll = async (req, res) => {
  try {
    await Holiday.deleteMany();
    res.send('All holidays deleted successfully');
  } catch (err) {
    res.status(500).send({ error: 'Failed to delete holidays' });
  }
};

const holidayRoute = {
  postData,
  findAll,
  deleteAll
};

export default holidayRoute;