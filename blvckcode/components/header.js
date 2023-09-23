import Image from 'next/image'
import ball from "./images/ball.png"
import black from "./images/Black Smart.png"
import white from "./images/White smart.png"

function Header() {
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
                        <div className="speakers">
                            <Image src={black}  alt="black Speakers" />
                        </div>
                        <div className="speakers">
                            <Image src={white}  alt="White Speakers" />
                        </div>
                    </div>
                </div>
            </div>
    )
}



export default Header