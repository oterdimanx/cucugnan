import GoogleMapReact from 'google-map-react'

const loc = {
    address: ' ',
    lat: 42.844,
    lng: 2.603,
};

export default function Map() {

    const Marker= props => {
        return <div className="pin">{loc.address}</div>
    }

    return (
        <div style={{ height: '70vh', width: '100%' }} id='google-map'>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAPS_API_KEY }}
            defaultCenter={loc}
            defaultZoom={15}
            >
            <Marker lat={loc.lat} lng={loc.lng} />
            </GoogleMapReact>
        </div>
    );

};