import Image from "next/image"
import play from "./images/play-button.png"

function Projects() {
    return(
        <div className="projects-container">
            <div className="projects-text">
                <h3> Our Projects </h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero 
                 nunc consequat interdum varius sit amet. Habitant morbi tristique senectus et 
                 netus et malesuada fames ac.
                </p>
            </div>
            <div className="video-carousel">
                <div className="video-card">
                    <Image className="play" src={play} width={60} height={60} alt="play"/>
                </div>  
                <div className="video-card">
                    <Image className="play" src={play} width={60} height={60} alt="play"/>
                </div>  
                <div className="video-card">
                    <Image className="play" src={play} width={60} height={60} alt="play"/>
                </div>  
            </div>
        </div>
    )
}
export default Projects