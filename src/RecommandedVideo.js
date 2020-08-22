import React from 'react'
import VideoCard from './VideoCard'

function RecommandedVideo() {
    return (
        <div className="recommandedVideos">
            <h2>Recommended</h2>
            <div className='recommandedVideos__videos'>
                <VideoCard 
                    title="How to get a job as junior developper"
                    image="../thumb2.jpg"
                    channel="Sombra"
                    views="2.1M Views"
                    timestamp="9 month ago"
                    channelImage="https://res.cloudinary.com/dzqfghzga/image/upload/v1585562336/xmnee20jwcljyzfzichr.jpg"
                />
                <VideoCard 
                    title="1H of Epic Music Vol.8"
                    image="../thumb3.jpg"
                    channel="Epic Music Mix"
                    views="756k Views"
                    timestamp="13 days ago"
                    channelImage="../channel3.jfif"
                />
                <VideoCard 
                    title="1H of Epic Music Vol.12"
                    image="../thumb4.jpg"
                    channel="Epic Music Mix"
                    views="210k Views"
                    timestamp="1 days ago"
                    channelImage="../channel3.jfif"
                />
                <VideoCard 
                    title="Overwatch 2 OFFICIAL TRAILER"
                    image="../thumb5.jpg"
                    channel="Alphacast"
                    views="4.1M Views"
                    timestamp=" 1 year ago"
                    channelImage="../channel4.jpg"
                />
                <VideoCard 
                    title="Total War II - Campagne Karl Frantz ... Atila DE RETOUR"
                    image="../thumb6.jpg"
                    channel="Alphacast"
                    views="326k Views"
                    timestamp="3 days ago"
                    channelImage="../channel4.jpg"
                />
                <VideoCard 
                    title="ROBERT KYOSAKI - Pere riche, Pere Pauvre"
                    image="../thumb7.jpg"
                    channel="Sonny Court"
                    views="1M Views"
                    timestamp="6 month ago"
                    channelImage="../channel7.png"
                />
                <VideoCard 
                    title="GRANT CARDONE - la règle des 40%"
                    image="../thumb8.jpg"
                    channel="Sonny Court"
                    views="453k Views"
                    timestamp="13 days ago"
                    channelImage="../channel7.png"
                />
                <VideoCard 
                    title="GRANT CARDONNE - Ne gaspille pas ton argent !"
                    image="../thumb9.jpg"
                    channel="Sonny Court"
                    views="161k Views"
                    timestamp="3 days ago"
                    channelImage="../channel7.png"
                />
                <VideoCard 
                    title="Comment changer pour de bon ?"
                    image="../thumb10.jfif"
                    channel="Sonny Court"
                    views="1.2M Views"
                    timestamp="5 month ago"
                    channelImage="../channel7.png"
                />
                <VideoCard 
                    title="5 REGLES d'Arnold Schwarzenergger"
                    image="../thumb11.jfif"
                    channel="Sonny Court"
                    views="3.1M Views"
                    timestamp="2 year ago"
                    channelImage="../channel7.png"
                />
                <VideoCard 
                    title="15 Minute Cloudinary course with javascript"
                    image="../thumb12.jpg"
                    channel="RainbowDev"
                    views="41k Views"
                    timestamp="12 days ago"
                    channelImage="../channel8.png"
                />
                <VideoCard 
                    title="Firebase and Javascript"
                    image="../thumb13.png"
                    channel="RainbowDev"
                    views="1.6k Views"
                    timestamp="1 days ago"
                    channelImage="../channel8.png"
                />
                <VideoCard 
                    title="Epic orchestral Battle music / RESISTANCE"
                    image="../thumb12.jfif"
                    channel="Music Spectrum"
                    views="310k Views"
                    timestamp="24 days ago"
                    channelImage="../channel9.jpg"
                />
                <VideoCard 
                    title="Epic orchestral Battle Music VOL.2"
                    image="../thumb13.jfif"
                    channel="Music Spectrum"
                    views="7.6k Views"
                    timestamp="1 days ago"
                    channelImage="../channel9.jpg"
                />
            </div>
        </div>
    )
}

export default RecommandedVideo
