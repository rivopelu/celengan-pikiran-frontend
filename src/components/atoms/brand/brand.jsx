import React from 'react'
import './brans.scss'
const Brand = ({ className }) => {
    return (
        <div id="brand_global" className={className}>
            <i className="fas fa-mountain brand_logo"></i>
            <h3>Celengan Pikiran</h3>
        </div>
    )
}

export default Brand