import React from 'react'

function UserProfile() {
    const Data = await axios.get('https://pinterest-guvi.herokuapp.com/users', {
        headers: {
            authorization: 'my secret token'
        }
    })
    return (
        <div>

        </div>
    )
}

export default UserProfile
