
function Navbar({navbar, navButton}) {
  
    return(
        <>
            <div className={navbar}>
                     <div className="bName">
                       Blvckcode.io 
                     </div>
                     <div className="navCont_flex">
                     <div className="navPages">Features</div>
                     <div className="navPages">Packages</div>
                     <div className="navPages">About</div>
                     <div className="navPages">Partners</div>
                     </div>
                     <div><button className={navButton}>Get Started</button></div>
            </div>
        </>
    )
}
export default Navbar