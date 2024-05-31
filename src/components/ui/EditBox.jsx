import React from 'react'

function EditBox({ data , title}) {

    return (
        <div className="profile-edit__box">
            <div className="profile-user__details">
                <p className="profile-edit__type">{title}</p>
                <p className="profile-user__email">{data}</p>
            </div>
            <span>Edit</span>
        </div>
    )
}

export default EditBox
