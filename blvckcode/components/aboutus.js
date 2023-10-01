import Image from 'next/image'
import Team from "./images/team-profile.svg"
import object from "./images/object.svg"
import { motion, useScroll } from "framer-motion"
import React, { useEffect, useState } from 'react';


function AboutUs() {

    const [animationVisible, setAnimationVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const delay = setTimeout(()=>{
            setAnimationVisible(true);
        }); //Delay of a second

        return () => clearTimeout(delay);

    })
    return(
            <div className="abt_cnt">
                {animationVisible &&
                <>
                <motion.div 
                animate = {{y: 10 }}
                transition={{ease: "linear", type: "spring", stiffness: 90,delay:2, duration : 150 }}
                >
                    <div className="item eclp_1"><Image src={object} height= "27" width="27" alt="desc"></Image></div>
                </motion.div>
                <motion.div
                animate = {{y: 30 }}
                transition={{ease: "linear", type: "spring", stiffness: 90,delay:2, duration : 1.5 }}
                >
                    <div className="item eclp_2"><Image src={object} height= "250" width="250" alt="desc"></Image></div>
                </motion.div>
                <motion.div>
                    <div className="item eclp_3"><Image src={object} height= "300" width="300" alt="desc"></Image></div>
                </motion.div>
                <motion.div>
                    <div className="item eclp_4"><Image src={object} height= "200" width="200" alt="desc"></Image></div>
                </motion.div>
                <motion.div>
                    <div className="item eclp_5"><Image src={object} height= "90" width="90" alt="desc"></Image></div>
                </motion.div>
                <motion.div>
                    <div className="item eclp_6"><Image src={object} height= "120" width="120" alt="desc"></Image></div>
                </motion.div>
                <motion.div>
                    <div className="item eclp_7"><Image src={object} height= "27" width="27" alt="desc"></Image></div>
                </motion.div>
                <motion.div>
                    <div className="item eclp_8"><Image src={object} height= "130" width="130" alt="desc"></Image></div>
                </motion.div>
                </>
                

                
                }
                <div className="abt_flex">
               <h3>Completed Projects <span>130+</span></h3>
               <h3> Milestone Achieved <span>1k+</span></h3>
               <h3> Satisfied Clients <span>80+</span></h3>
               <Image src={Team}/>
               </div>
            </div>
    )
}
export default AboutUs