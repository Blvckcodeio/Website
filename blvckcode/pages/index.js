import Navbar from '../components/navbar'
import Header from '../components/header'
import AboutUs from '../components/aboutus'
import Packages from '../components/ourpackages'
import Projects from '../components/projects'
import Partners from '../components/partners'
import Testimonials from '@/components/testimonials'



function Home() {
  return (
    <>
     <Navbar></Navbar> 
      <Header></Header>
      <AboutUs></AboutUs>
      <Packages></Packages>
      <Projects></Projects>
      <Partners></Partners>
      <Testimonials></Testimonials>
    </>
  )
}
export default Home