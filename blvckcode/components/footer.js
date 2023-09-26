import Image from "next/image"
import insta from "../components/images/instagram.png"
import linked from "../components/images/linked-in.png"
import twitter from "../components/images/twitter-x.png"

function Footer() {
    return(
        <>
          <div className="footer_cont">

                 <div className="footer_socials">
                     <div className="footer_brandN"> <h4>Blvckcode.io</h4></div>
                     <div className="footer_img"> <Image src={insta} alt="Partners"/> </div>
                     <div className="footer_img"> <Image src={linked} alt="Partners"/> </div>
                     <div className="footer_img"> <Image src={twitter} alt="Partners"/> </div>
                     </div>
                    
                     <div className="footer_text">
                        <div className="">Blog</div>
                        <div className="">For Investors</div>
                        <div className="">About</div>
                        <div className="">Partners</div>
                     </div>
          </div>
        </>
    )
}
export default Footer