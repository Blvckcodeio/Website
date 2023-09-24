import Navbar from '../components/navbar'
import Header from '../components/header'
import AboutUs from '../components/aboutus'
import Packages from '../components/ourpackages'
import Projects from '../components/projects'



function Home() {
  return (
    <>
     <Navbar></Navbar> 
      <Header></Header>
      <AboutUs></AboutUs>
      <Packages></Packages>
      <Projects></Projects>
    </>
  )
}
export default Home