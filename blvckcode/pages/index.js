import Navbar from '../components/navbar'
import Header from '../components/header'
import AboutUs from '../components/aboutus'
import Packages from '../components/ourpackages'
import Projects from '../components/projects'
import Partners from '../components/partners'
import Testimonials from '@/components/testimonials'
import Footer from '../components/footer'
import React, { useState } from 'react';



function Home() {

  const [packages, setPackages] = useState('packages-container')
  const [packagesText, setPackagesText] = useState('package-text')

  // Function to update the packages state
  const updatePackages = (newValue) => {
    setPackages(newValue);
  }

  const updatePackagesText = (newValue) => {
    setPackagesText(newValue);
  }

  return (
    <>
     <Navbar></Navbar> 
      <Header updatePackages={updatePackages} updatePackagesText={updatePackagesText}></Header>
      <AboutUs></AboutUs>
      <Packages packages={packages} packagesText={packagesText}></Packages>
      <Projects></Projects>
      <Partners></Partners>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  )
}
export default Home