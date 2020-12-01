import React from 'react'
import './ApplicationCard.css'

const ApplicationCard = ({name, id, description}) => {
    return (
        <div className="application">
            <p className="application__name">{name}</p>
            <p className="application__id">{id}</p>
            <p className="application__description">{description}</p>
            <div>
                <button>View</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default ApplicationCard
