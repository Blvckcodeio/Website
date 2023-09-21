import Image from 'next/image'
import ball from "./svgs/ball.png"

function Header() {
    return(
            <div className="hContainer">
                <div className="htContainer">
                    <text className="htext">Experience smart living</text>
                    <div className="bel-text">
                    <div className="turn-on-btn">
                        <div className="turn-ball">
                            <Image src={ball} height= "20" width="20" alt="desc"/>
                        </div>
                        <p className='btn-text'>Turn Off</p>
                    </div>
                    </div>
                </div>
            </div>
    )
}



export default Header