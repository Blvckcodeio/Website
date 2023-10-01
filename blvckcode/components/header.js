import Image from 'next/image'
import ball from "./images/ball.png"
import black from "./images/Black Smart.png"
import white from "./images/White smart.png"
import { motion } from "framer-motion"
import React, { useEffect, useState } from 'react';


function Header() {
    const [animationVisible, setAnimationVisible] = useState(false);

    useEffect(() => {
        const delay = setTimeout(()=>{
            setAnimationVisible(true);
        }); //Delay of a second

        return () => clearTimeout(delay);

    })


    return(
            <div className="hContainer">
                <div className="htContainer">
                    <text className="htext">Experience smart living</text>
                    <div className="bel-text">
                    <div className="turn-on-btn">
                        <div className="turn-ball">
                            <Image src={ball} height= "32" width="32" alt="desc"/>
                        </div>
                    </div>
                    <text className="htext">like never before.</text>
                    </div>
                    <div className="img-container">
                        {animationVisible &&
                        <motion.div
                        animate = {{x:900,y:-100,rotate:-20, scale:1.2}}
                        transition={{ease: "linear", type: "spring", stiffness: 90, delay: 0.2 }}
                        >
                        <div className="speakers">
                            <Image src={black} width="300" height="300" alt="black Speakers" />
                        </div>
                        </motion.div>

                        }
                        <motion.div
                        animate = {{x:-400,y:200,rotate:-10, scale:1.2}}
                        transition={{ease: "linear", type: "spring", stiffness: 90, delay: 0.2 }}
                        >
                        <div className="w-speakers">
                            <Image src={white} width="300" height="300" alt="White Speakers" />
                        </div>
                        </motion.div>
                    </div>
                </div>
            </div>
    )
}



export default Header