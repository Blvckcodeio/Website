import Image from "next/image"
import quote1 from "../components/images/qoute.svg"
import quote2 from "../components/images/quote2.svg"
import quote3 from "../components/images/quote3.svg"
import star from "../components/images/stars.svg"

function Testimonials() {
    return(
        <div className="test-container">
            <div className="test-header">
                <p>Testimonials</p>
                <h3>What people are saying about us.</h3>
            </div>
            <div className="test-cards">
                <div className="test-card">
                    <div className="quote">
                    <Image src={quote1} alt="quote green"/>
                    </div>
                    <h3>Mitch Danieals</h3>
                    <div className="stars"><Image src={star} alt="stars"/></div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada 
                    proin libero nunc consequat interdum varius sit amet. 
                    Habitant morbi tristique senectus et netus et malesuada fames ac.
                    </p>
                </div>
                <div className="test-card">
                <div className="quote">
                    <Image src={quote2} alt="quote blue"/>
                    </div>
                    <h3>Mitch Danieals</h3>
                    <div className="stars"><Image src={star} alt="stars"/></div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada 
                    proin libero nunc consequat interdum varius sit amet. 
                    Habitant morbi tristique senectus et netus et malesuada fames ac.
                    </p>
                </div>
                <div className="test-card">
                    <div className="quote">
                    <Image src={quote3} alt="quote purple"/>
                    </div>
                    <h3>Mitch Danieals</h3>
                    <div className="stars"><Image src={star} alt="stars"/></div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada 
                    proin libero nunc consequat interdum varius sit amet. 
                    Habitant morbi tristique senectus et netus et malesuada fames ac.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Testimonials