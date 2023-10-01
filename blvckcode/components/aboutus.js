import Image from 'next/image'
import Team from "./images/team-profile.svg"
import object from "./images/object.svg"
import { motion, useScroll } from "framer-motion"
import React, { useEffect, useState } from 'react';


function AboutUs() {

    const [animationVisible, setAnimationVisible] = useState(false);

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
                <div className="item eclp_1">
                <motion.div 
                animate = {{rotate:360 }}
                transition={{ease: "linear", duration : 2, repeat:Infinity }}
                >
                    <Image src={object} height= "27" width="27" alt="desc"></Image>
                </motion.div>
                </div>
                
                <div className="item eclp_2">
                <motion.div
                animate = {{rotate :360 }}
                transition={{ease: "linear", duration : 2, repeat:Infinity }}
                >
                 <Image src={object} height= "250" width="250" alt="desc"></Image>
                </motion.div>
                </div>
                
                <div className="item eclp_3">
                    <motion.div
                    animate = {{rotate :360 }}
                    transition={{ease: "linear", duration : 2, repeat:Infinity }}
                    >
                        <Image src={object} height= "300" width="300" alt="desc"></Image>
                    </motion.div>
                </div>
                
                <div className="item eclp_4">
                    <motion.div
                    animate = {{rotate :360 }}
                    transition={{ease: "linear", duration : 2, repeat:Infinity }}
                    >
                        <Image src={object} height= "200" width="200" alt="desc"></Image>
                    </motion.div>
        
                </div>
                <div className="item eclp_5">
                    <motion.div
                    animate = {{rotate :360 }}
                    transition={{ease: "linear", duration : 2, repeat:Infinity }}
                    >
                        <Image src={object} height= "200" width="200" alt="desc"></Image>
                    </motion.div>
        
                </div>
                <div className="item eclp_6">
                    <motion.div
                    animate = {{rotate :360 }}
                    transition={{ease: "linear", duration : 2, repeat:Infinity }}
                    >
                        <Image src={object} height= "50" width="50" alt="desc"></Image>
                    </motion.div>
        
                </div>
                <div className="item eclp_7">
                    <motion.div
                    animate = {{rotate :360 }}
                    transition={{ease: "linear", duration : 2, repeat:Infinity }}
                    >
                        <Image src={object} height= "100" width="100" alt="desc"></Image>
                    </motion.div>
        
                </div>
                <div className="item eclp_8">
                    <motion.div
                    animate = {{rotate :360 }}
                    transition={{ease: "linear", duration : 2, repeat:Infinity }}
                    >
                        <Image src={object} height= "130" width="130" alt="desc"></Image>
                    </motion.div>
        
                </div>
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