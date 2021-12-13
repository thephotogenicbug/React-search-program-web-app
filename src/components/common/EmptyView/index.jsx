import React from 'react'
import BlankCanvas from './noResult.png'
import './styles.css'
const EmptyView = () => {
    return (
        <div className="empty-view">
            <img src={BlankCanvas} />
        </div>
    )
}

export default EmptyView
