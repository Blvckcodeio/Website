import { useState, useEffect } from 'react';

function Navbar({navbar, navButton}) {
  
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Update the state only once after mount
        const handleResize = () => {
          if (window.innerWidth < 768) {
            setIsMobile(true);
          } else {
            setIsMobile(false);
          }
        };
    
        // Initial check
        handleResize();
    
        // Attach event listener
        window.addEventListener('resize', handleResize);
    
        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return(
        <>
            <div className={navbar}>
                     <div className="bName">
                       Blvckcode.io 
                     </div>
                     {isMobile &&
                        <>
                         <div className="navCont_flex">
                     <div className="navPages">Features</div>
                     <div className="navPages">Packages</div>
                     <div className="navPages">About</div>
                     <div className="navPages">Partners</div>
                     </div>
                     <div><button className={navButton}>Get Started</button></div>
                     </>
                     }
                    
            </div>
        </>
    )
}
export default Navbar