import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="../channel7.png"
                channel="Sonny Court"
                verified
                subs='639k'
                nbOfVideos={287}
                description="Vous trouverez ici toute la motivation dont vous avez besoin pour réussir à progresser et vous épanouir..."
            />
            <hr />
            <VideoRow
                views="161k"
                subs="639k"
                description=''
                timestamp="3 days ago" 
                channel='Sonny Court' 
                title='GRANT CARDONNE - Ne gaspille pas ton argent !'
                image='../thumb9.jpg'
            />
            <VideoRow
                views="1.2M Views"
                subs="639k"
                description=""
                timestamp="5 month ago"
                channel="Sonny Court"
                title="Comment changer pour de bon ?"
                image="../thumb10.jfif"
                />
            <VideoRow
                views="3.1M Views"
                subs="639k"
                description=""
                timestamp="2 year ago"
                channel="Sonny Court"
                title="5 REGLES d'Arnold Schwarzenergger"
                image="../thumb11.jfif"  
            />
            <VideoRow
                views="1M Views"
                subs="639k"
                description=''
                timestamp="6 month ago"
                channel="Sonny Court" 
                title="ROBERT KYOSAKI - Pere riche, Pere Pauvre"
                image="../thumb7.jpg"
                    
            />
            <VideoRow
                views="453k Views"
                subs="639k"
                description=''
                timestamp="13 days ago"
                channel="Sonny Court" 
                title="GRANT CARDONE - la règle des 40%"
                image="../thumb8.jpg"
                    
            />
        </div>
    )
}

export default SearchPage