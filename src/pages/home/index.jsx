import React from 'react'
import Layout from '../../layout/index'
import './home.css'
import Colone from '../../assets/colone.jpg'
import Colimg22 from '../../assets/colimg22.jpg'
import Envelop from '../../assets/envelop.png'
import Jobs from '../../assets/Jobs.png'
import Photo from '../../assets/PhotoIcon.png'
import Event from '../../assets/Event.png'
import VideoColored from '../../assets/VideoColored.png'
import Article from '../../assets/Article.png'
import Web3logo from '../../assets/Web3logo.jpeg'
import Web3banner from '../../assets/web3banner.jpg'

export default function Index() {
  return (
    <Layout>
        <div className="home-page-cards">
          <div className="home-page-col-one">
            <div className="col-card-one-home">
              <div className="col-card-one-img1">
                <img src={Colone} alt="Colone icon" />
              </div>
              <div className="col-card-one-img2">
              <img src={Colimg22} alt="Colimg22 icon" />
              </div>
              
              <div className="colname">
                <h1>Ellam Pendulum</h1>
              </div>
              
              <div className="colbio">
                <h4>Renowned timekeeper and horologist living in the bustling city of Tempusville. With a unique ability to manipulate time through instricate clockwork devices.</h4>
              </div>
              
              <div className="app-hr-line"></div>
              
              <div className="reviewed-notification"> 
              <div className="reviewed-Colone">
               <span> Who viewed your profile </span>
               <span>70</span>
              </div>
              
              <div className="reviewed-Coltwo">
               <span> Views of your post </span>
               <span>193</span>
              </div>

              <div className="app-hr-line"></div>

              <div className="premium">
                <p>Access exclusive tools & insights</p>
              </div>
              <div className="premium-text">
              <img src={Envelop} alt="Envelop Icon" /> 
              <h4><a href="https://lnkd.in/eCEShZVv">Try premium for 1 free month </a></h4>
              </div>

              <div className="app-hr-line"></div>

              <div className="premium-text-2">
              <img src={Jobs} alt="JobsIcon" /> 
              <h4>My Items</h4>
              </div>
              
              </div>
            </div>
          </div>
          
          <div className="home-page-col-two">
            <div className="home-page-col-two-inner">

            <div className="second-col-search">
              <img src={Colimg22} alt="Colimg22 icon" />
              <input type="text"  placeholder='Start your post'/>
            </div>

            <div className="media-container">

              <div className="premium-text-3">
              <img src={Photo} alt="Photo Icon" /> 
              <p>Photo</p>
              </div>

              <div className="premium-text-3">
              <img src={Event} alt="Event Icon" /> 
              <p>Event</p>
              </div>

              <div className="premium-text-3">
              <img src={VideoColored} alt="VideoColored Icon" /> 
              <p>Video</p>
              </div>

              <div className="premium-text-3">
              <img src={Article} alt="Article Icon" /> 
              <p>Articles</p>
              </div>
            </div>
            
            </div>

            <div className="app-hr-line"></div>

            <div className="post-container">
              <div className="post-container-one">
              <div className="container-holder">
              <span className='post-container-link'><b>Linkedin</b></span>
               <span className='post-container-comment'> commented on this post</span>
              </div>
              <span className='comment-dot'>...</span>
              </div>
              
            <div className="app-hr-line"></div>
            <div className="post-content-container">

            <div className="post-content">
              <img src={Web3logo} alt="Web3logo icon" />
            </div>
            <div className="post-content-subtext">
              <h1>Web3Bridge</h1> 
              <p>4,800 followers</p>
            </div>
            </div>
            <div className="mainpost">
              <p>
                Three weeks ago, we hosted one of the most memorable Web3 events on the continent in Lagos. 

The week-long event started with a three-day hackathon which was managed by Faith Roberts & Mayowa Obisesan & partners Web3Afrika Blockchain University of Nigeria Ginakev Digital Academy (GIDA) ™ BlockHeader Web3 Web3Ladies Blockfuse Labs

The hackathon had over 500 sign-ups and was hosted in three different locations; Enugu, Kaduna & Lagos. There were 42 top project submissions and $10,500 &#129297; in prizes.

This year's conference received 2,227 sign-ups and featured 72 speakers.
The conference had 10 sponsors, with Lisk being the platinum sponsor. The gender distribution of attendees was 73.5% male and 26.2% female, with most participants being Developers (29.8%) and newbies (22%). 

The conference was planned by an amazing team of dedicated individuals who handled various aspects of the event.

We are grateful for the support of our community partners.</p>

<img src={Web3banner} alt="Web3banner icon" />
            </div>
            </div>
          </div>
          <div className="home-page-col-three">Tinuade</div>
        </div>
       
    </Layout>
  )
}
