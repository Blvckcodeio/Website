import Image from 'next/image'
import Team from "./images/team-profile.svg"
import object from "./images/object.svg"
import { motion, useScroll } from "framer-motion"


function AboutUs() {
    return(
        <>
            <div className="abt_cnt">
               
                <div className="item eclp_1"><Image src={object} height= "27" width="27" alt="desc"></Image></div>
                <div className="item eclp_2"><Image src={object} height= "250" width="250" alt="desc"></Image></div>
                <div className="item eclp_3"><Image src={object} height= "300" width="300" alt="desc"></Image></div>
                <div className="item eclp_4"><Image src={object} height= "200" width="200" alt="desc"></Image></div>
                <div className="item eclp_5"><Image src={object} height= "90" width="90" alt="desc"></Image></div>
                <div className="item eclp_6"><Image src={object} height= "120" width="120" alt="desc"></Image></div>
                <div className="item eclp_7"><Image src={object} height= "27" width="27" alt="desc"></Image></div>
                <div className="item eclp_8"><Image src={object} height= "130" width="130" alt="desc"></Image></div>

                <div className="abt_flex">
               <h3>Completed Projects <span>130+</span></h3>
               <h3> Milestone Achieved <span>1k+</span></h3>
               <h3> Satisfied Clients <span>80+</span></h3>
               <Image src={Team}/>
               </div>
            </div>
        </>
    )
}
export default AboutUs