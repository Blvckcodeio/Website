import Image from "next/image"
import Tuya from "../components/images/tuya-bg-2.svg"
import Tplink from "../components/images/tplink-colored-1.svg"
import Credpal from "../components/images/credpal-bg-2.svg"



function Partners() {
    return(
        <>
            <div className="partners_cont">
                <div className="partners_text">
                    <h2>Our Partners</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur.</p>
                       </div>
                <div className="partners_img">
                   <div className="Partners_img_flex"> <Image src={Tuya} alt="Partners"/> </div>
                   <div className="Partners_img_flex"> <Image src={Tplink} alt="Partners"/> </div>
                   <div className="Partners_img_flex"> <Image src={Credpal} alt="Partners"/> </div>
                   <div className="Partners_img_flex"> <Image src={Credpal} alt="Partners"/> </div>
                </div>
            </div>
        </>
    )
}
export default Partners