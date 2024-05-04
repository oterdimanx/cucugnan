const handler = async () => {
  try {

      const apiKey = ''
      //process.env.REACT_APP_MAPS_API_KEY

      return {
          statusCode: 200,
          headers: {
              'Access-Control-Allow-Headers': 'Content-Type',
              'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({apiKey}),
      }
  } catch (error) {
      return {
      statusCode: 500,
      headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
      },
      body: error
      }
  }
};

module.exports = { handler }
