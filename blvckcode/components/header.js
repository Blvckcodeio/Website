import Image from 'next/image'
import ball from "./images/ball.png"
import black from "./images/Black Smart.png"
import white from "./images/White smart.png"
import {motion, useInView, useAnimation} from "framer-motion"
import React, { useEffect, useRef } from 'react';


function Header() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])


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
                    <div ref={ref} className="img-container">
                        
                        <div className="speakers">
                        <motion.div

                        variants={{
                            hidden: {opacity:0, x:-500,y:0, scale:1.0},
                            visible: {opacity:1, x:50,y:70, scale:1.2}
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={ {ease: "easein", stiffness: 15 ,type: "spring",duration: 1}}
                        >
                            <Image src={black} width="300" height="300" alt="black Speakers" />
                        </motion.div>
                        </div>
                        <div className="w-speakers">
                        <motion.div
                            variants={{
                                hidden: {opacity:0, x:500,y:0, scale:1.0},
                                visible: {opacity:1, x:-0,y:250, scale:1.2}
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={ {ease: "easein", type: "spring",stiffness: 15 ,duration: 1}}
                        >
                            <Image src={white} width="300" height="300" alt="White Speakers" />
                        </motion.div>

                        </div>
                    </div>
                </div>
            </div>
    )
}



export default Header