function Navbar() {
    return(
        <>
            <div className="navBar">
                 <div className="navCont">
                     <div className="bName">
                       Blvckcode.io 
                     </div>
                     <div className="navCont_flex">
                     <div className="navPages">Features</div>
                     <div className="navPages">Packages</div>
                     <div className="navPages">About</div>
                     <div className="navPages">Partners</div>
                     </div>
                     <div><button className="nav_button">Get Started</button></div>
                 </div>
            </div>
        </>
    )
}
export default Navbar