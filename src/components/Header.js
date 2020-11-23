import { Icon } from '@iconify/react'
import trackIcon from '@iconify/icons-gg/track';


const Header = () => {
    return (
        <header>
            <h1><Icon icon={trackIcon}/> Natural Event Tracker (Powered By NASA)</h1>
        </header>
    )
}

export default Header
