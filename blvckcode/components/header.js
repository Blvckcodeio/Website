import Image from 'next/image'
import ball from "./images/ball.png"
import black from "./images/Black Smart.png"
import white from "./images/White smart.png"
import {motion, useInView, useAnimation} from "framer-motion"
import React, { useEffect, useRef, useState } from 'react';


function Header({updatePackages, updatePackagesText}) {

    const [darkmode, setDarkeMode] = useState('hContainer')
    const [darkmodeText, setTextDarkeMode] = useState('htext')
    const [darkbut, setDarkbut] = useState('turn-on-btn')
    const [ballDark, setBallDark] = useState('turn-ball')

    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const mainControls = useAnimation();

    const handleButtonClick = () => {
        if(darkmode === 'hContainer'){
            setDarkeMode('hContainer-dark')
            setTextDarkeMode('htext-dark')
            setDarkbut('turn-on-btn-dark')
            setBallDark('turn-ball-dark')
            updatePackages('packages-container-dark')
            updatePackagesText('package-text-dark')

        }else{
            setDarkeMode('hContainer')
            setTextDarkeMode('htext')
            setDarkbut('turn-on-btn')
            setBallDark('turn-ball')
            updatePackages('packages-container')
            updatePackagesText('package-text')
        }
        
    }

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])


    return(
            <div className={darkmode}>
                <div className="htContainer">
                    <text className={darkmodeText}>Experience smart living</text>
                    <div className="bel-text">
                    <div className= {darkbut} onClick={handleButtonClick}>
                        <div className={ballDark}>
                               <Image src={ball} height= "32" width="32" alt="desc"/>
                        </div>
                    </div>
                    <text className={darkmodeText}>like never before.</text>
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