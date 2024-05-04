import GoogleMapReact from 'google-map-react'

const loc = {
    address: 'Cucugnan',
    lat: 42.841,
    lng: 2.607,
    mykey: process.env.REACT_APP_MAPS_API_KEY,
};
//console.log(process.env.NODE_ENV)
export default function Map({apiKey}) {
    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_DEVMAPS_API_KEY }}
            defaultCenter={loc}
            defaultZoom={15}
            >
            </GoogleMapReact>
        </div>
    );


  };