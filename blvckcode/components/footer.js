import Image from "next/image"
import insta from "../components/images/instagram.png"
import linked from "../components/images/linked-in.png"
import twitter from "../components/images/twitter-x.png"
import linkedIn from "../components/images/linked-in.svg"

function Footer({footer, footerText, footerSocials}) {
    
    return(
        <>
          <div className={footer}>
                 <div className={footerSocials}>
                     <div className="footer_brandN"> Blvckcode.io</div>
                     <div className="footer_img"> <Image src={insta} alt="Partners"/> </div>
                     <div className="footer_img"> <Image src={linkedIn} alt="Partners"/> </div>
                     <div className="footer_img"> <Image src={twitter} alt="Partners"/> </div>
                     </div>
                    
                     <div className={footerText}>
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