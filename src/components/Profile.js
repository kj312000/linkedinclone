import React from 'react'

function Profile() {
    return (
        <>
        <div style={{height:350, width:250, backgroundColor: 'white', borderRadius: 10, margin: 10}}>
            <br/>
            <h3 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>Dylan Sanusi</h3>
            
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <img src="avatar.jpg" alt="" height={50} style={{borderRadius: '50px'}}/>
                <div>Connections</div>
                <br/>
                <div>
                    who viewed your profile
                </div>
                <hr/>
                <div>
                    Get Hired Faster!
                </div>
                <hr/>
                <div>
                    My Items
                </div>
                <hr/>
            </div>
        </div>
        </>
    )
}

export default Profile
