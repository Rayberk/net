import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert'
import weatherWindy from '@iconify-icons/mdi/weather-windy';
import volcano11 from '@iconify/icons-maki/volcano-11';



export const LocationMarker = ({ lat, lng, onClick, icontype
}) => {
    function geticon(icontype) {
        if(icontype === "fire") {
            const icon = locationIcon
            return icon
        } else if(icontype === "storm") {
            const icon = weatherWindy
            return icon
        } else if(icontype === "volcan") {
            const icon = volcano11
            return icon
        }
    }
    const icon = geticon(icontype)
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={icon} className="location-icon"/>
        </div>
    )
}

export default LocationMarker