import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
export const Map = ({ eventData,center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} icontype="fire"  onClick={() => setLocationInfo({ 
                id: ev.id, title:ev.title, date:ev.geometries[0].date
            })} /> 
        } else if(ev.categories[0].id === 10) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} icontype="storm"  onClick={() => setLocationInfo({ 
                id: ev.id, title:ev.title, date:ev.geometries[0].date
            })} /> 
        } else if(ev.categories[0].id === 12) {
            if(ev.title === "Dukono Volcano, Indonesia"){
                return null
            }
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} icontype="volcan"  onClick={() => setLocationInfo({ 
                id: ev.id, title:ev.title, date:ev.geometries[0].date
            })} /> 
        }
        return null
    })


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD__70mqCTa1tyKnskwAipVo_vvVvXWxh0'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {
    center : {
        lat: 39.4229, 
        lng: 35.2729
    },
    zoom : 6
}

export default Map