import Image from "next/image"
import speakers from "./images/Google-home.png"

function Packages() {
    return(
        <>
            <div className="packages-container">
                <h3>Our pakages</h3>
                <div className="pakages">
                    
                    <div className="package-img">
                        <Image src={speakers} width={400} height={300} alt="Speakers"/>
                    </div>
                    <div className="package-text">
                    <h3>Helios Package</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc 
                    consequat interdum varius sit amet. Habitant morbi tristique senectus et netus 
                    et malesuada fames.
                    <div className="package-btn">
                        <p>Get Started</p>
                    </div>
                    </div>
                </div>
                <div className="pakages">
                    <div className="package-text">
                    <h3>Helios Package</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc 
                    consequat interdum varius sit amet. Habitant morbi tristique senectus et netus 
                    et malesuada fames .
                    <div className="package-btn">
                        <p>Get Started</p>
                    </div>
                    </div>
                    <div className="package-img">
                        <Image src={speakers} width={400} height={300} alt="Speakers"/>
                    </div>
                </div>
                <div className="pakages">
                    <div className="package-img">
                        <Image src={speakers} width={400} height={300} alt="Speakers"/>
                    </div>
                    <div className="package-text">
                    <h3>Helios Package</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc 
                    consequat interdum varius sit amet. Habitant morbi tristique senectus et netus 
                    et malesuada fames .
                    <div className="package-btn">
                        <p>Get Started</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Packages