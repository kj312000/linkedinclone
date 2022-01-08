import React from 'react'
import Fixed from './Fixed'
import Post from './Post'
import Profile from './Profile'

function Home() {
    return (
        <div style={{display:'flex', margin: 'auto', maxWidth:1200}}>
            <div style={{padding: 10}}>
                <Profile/>
                <Fixed/>
            </div>
            <div>
            <Post 
                author={{name: "Dylan Sanusi", avatar: "https://media-exp1.licdn.com/dms/image/C5603AQFm6ACatS_3yg/profile-displayphoto-shrink_100_100/0/1616742471486?e=1643241600&v=beta&t=Sl6bgtTkINNSjP4cLZ2wXNHiIop3BW5ZmCWDbCpn-jo", title: 'Intelligent Technologies Enthusiast | AFR Top 100 Future Leader'}}
                content='🚀 Keen to be starting within Atlassians Site Reliability Engineering team this week! Excited to develop my skills in intelligent systems, software, and cloud to empower and drive innovation outcomes for 200,000+ companies worldwide 🌏'
                time= '1d'
                likeCount = {300}
            />
                        <Post 
                author={{name: "Dylan Sanusi", avatar: "https://media-exp1.licdn.com/dms/image/C5603AQFm6ACatS_3yg/profile-displayphoto-shrink_100_100/0/1616742471486?e=1643241600&v=beta&t=Sl6bgtTkINNSjP4cLZ2wXNHiIop3BW5ZmCWDbCpn-jo", title: 'Intelligent Technologies Enthusiast | AFR Top 100 Future Leader'}}
                content='🚀 Keen to be starting within Atlassians Site Reliability Engineering team this week! Excited to develop my skills in intelligent systems, software, and cloud to empower and drive innovation outcomes for 200,000+ companies worldwide 🌏'
                time= '1d'
                likeCount = {300}
            />
                        <Post 
                author={{name: "Dylan Sanusi", avatar: "https://media-exp1.licdn.com/dms/image/C5603AQFm6ACatS_3yg/profile-displayphoto-shrink_100_100/0/1616742471486?e=1643241600&v=beta&t=Sl6bgtTkINNSjP4cLZ2wXNHiIop3BW5ZmCWDbCpn-jo", title: 'Intelligent Technologies Enthusiast | AFR Top 100 Future Leader'}}
                content='🚀 Keen to be starting within Atlassians Site Reliability Engineering team this week! Excited to develop my skills in intelligent systems, software, and cloud to empower and drive innovation outcomes for 200,000+ companies worldwide 🌏'
                time= '1d'
                likeCount = {300}
            />
                        <Post 
                author={{name: "Dylan Sanusi", avatar: "https://media-exp1.licdn.com/dms/image/C5603AQFm6ACatS_3yg/profile-displayphoto-shrink_100_100/0/1616742471486?e=1643241600&v=beta&t=Sl6bgtTkINNSjP4cLZ2wXNHiIop3BW5ZmCWDbCpn-jo", title: 'Intelligent Technologies Enthusiast | AFR Top 100 Future Leader'}}
                content='🚀 Keen to be starting within Atlassians Site Reliability Engineering team this week! Excited to develop my skills in intelligent systems, software, and cloud to empower and drive innovation outcomes for 200,000+ companies worldwide 🌏'
                time= '1d'
                likeCount = {300}
            />
            </div>
            <div style={{padding: 10}}>
            <Profile/>

            </div>
            
        </div>
    )
}

export default Home
