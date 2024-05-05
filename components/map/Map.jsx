import GoogleMapReact from 'google-map-react'

const loc = {
    address: 'Cucugnan',
    lat: 42.841,
    lng: 2.607,
    mykey: process.env.REACT_APP_MAPS_API_KEY,
};

export default function Map({apiKey}) {
    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyB3LTjNZRSZ9N7Jdysh5sd36tU3IUirhhc' }}
            defaultCenter={loc}
            defaultZoom={15}
            >
            </GoogleMapReact>
        </div>
    );


  };