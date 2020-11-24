import React from 'react'
import Spinner from './spinner.gif'

const Loader = () => {
    return (
        <div className="loader">
            <h1>Fetching Data</h1>
                <div class="loading">
                    <div class="shadow"></div>
                </div>
        </div>
    )
}

export default Loader
