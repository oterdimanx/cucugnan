export default async function handler(req, res, next) {
    try {
        const apiKey = process.env.REACT_APP_MAPS_API_KEY
        res.send(JSON.stringify({apiKey}));
    } catch (error) {
        res.send(JSON.stringify({ message: error }));
    }

  };