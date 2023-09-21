import Image from 'next/image'
import ball from "./svgs/balls.svg"

function Header() {
    return(
            <div className="hContainer">
                <div className="htContainer">
                    <text className="htext">Experience smart living</text>
                    <div className="turn-on-btn">
                        <div className="turn-ball">
                            <Image src={ball} alt="desc"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}



export default Header