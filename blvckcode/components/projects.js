import Image from "next/image"
import play from "./images/play-button.png"
import { motion } from "framer-motion"

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
                <motion.div whileHover={{ scale:1.1}}>
                    <Image className="play" src={play} width={60} height={60} alt="play"/>
                </motion.div>

                </div> 
                <div className="video-card">
                    <motion.div whileHover={{ scale:1.1}}>
                        <Image className="play" src={play} width={60} height={60} alt="play"/>
                    </motion.div>                
                </div>  
                <div className="video-card">
                    <motion.div whileHover={{ scale:1.1}}>
                        <Image className="play" src={play} width={60} height={60} alt="play"/>
                    </motion.div>           
                </div>  
            </div>
        </div>
    )
}
export default Projects