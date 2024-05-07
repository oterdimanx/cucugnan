import GoogleMapReact from 'google-map-react'

const loc = {
    address: 'Cucugnan',
    lat: 42.841,
    lng: 2.607,
};

export default function Map() {

    return (
        <div style={{ height: '70vh', width: '100%' }} id='google-map'>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAPS_API_KEY }}
            defaultCenter={loc}
            defaultZoom={15}
            >
            </GoogleMapReact>
        </div>
    );

};