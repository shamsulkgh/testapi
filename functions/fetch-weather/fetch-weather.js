const axios = require('axios')
const qs = require('qs')

const handler = async (event) => {
  const API_PARAMS = qs.stringify(event.queryStringParameters)
  const {maxRecords, view} = event.queryStringParameters
  try {
    const { data } = await axios.get("https://api.airtable.com/v0/appH9pGf1FeVfhzUe/Table1?${API_PARAMS}", {
      headers: {
        authorization: process.env.API_SECRET,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
