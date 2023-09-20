import ball from "./svgs/ball.svg"

function Header() {
    return(
        <>
            <div className="hContainer">
                <div className="htContainer">
                    <text className="htext">Experience smart living  </text>
                    <div className="turn-on-btn">
                        <div className="turn-ball">
                            <img 
                            src={ball}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Header