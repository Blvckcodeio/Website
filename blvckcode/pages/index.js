import Navbar from '../components/navbar'
import Header from '../components/header'
import AboutUs from '../components/aboutus'
import Packages from '../components/ourpackages'
import Projects from '../components/projects'
import Partners from '../components/partners'
import Testimonials from '@/components/testimonials'
import Footer from '../components/footer'
import React, { useState } from 'react'


function Home() {

  const [packages, setPackages] = useState('packages-container')
  const [packagesText, setPackagesText] = useState('package-text')
  const [footer, setFooter] = useState('footer_cont')
  const [footerText, setFooterText] = useState('footer_text')
  const [footerSocials, setFooterSocials] = useState('footer_socials')
  const [navBar, setNavBar] = useState(false)
  const [navButton, setNavButton] = useState('nav_button')

  // Function to update the packages state
  const updatePackages = (newValue) => {
    setPackages(newValue);
  }

  const updatePackagesText = (newValue) => {
    setPackagesText(newValue);
  }

  const updateFooter = (newValue) => {
    setFooter(newValue);
  }

  const updateFooterText = (newValue) => {
    setFooterText(newValue);
  }

  const updateFooterSocials = (newValue) => {
    setFooterSocials(newValue);
  }

  const updateNavBar = (newValue) => {
    setNavBar(newValue);
  }

  const updateNavButton = (newValue) => {
    setNavButton(newValue);
  }
 
  //change navbar color when scrolling
  const navScroll = () => {
      if (window.scrollY >= 80) {
          setNavBar(true);
        } 
      else {
          setNavBar(false);
        }
      };
     
  if(typeof window !== 'undefined'){
      window.addEventListener("scroll", navScroll)
      window.addEventListener("click", navScroll)
    };

  return (
    <>
     <Navbar navbar={navBar ? 'nav_scroll' : 'navBar'} navButton={navButton}></Navbar> 
      <Header updatePackages={updatePackages} updatePackagesText={updatePackagesText} updateFooter={updateFooter} updateFooterText={updateFooterText} updateFooterSocials={updateFooterSocials} updateNavBar={updateNavBar} updateNavButton={updateNavButton}></Header>
      <AboutUs></AboutUs>
      <Packages packages={packages} packagesText={packagesText}></Packages>
      <Projects></Projects>
      <Partners></Partners>
      <Testimonials></Testimonials>
      <Footer footer={footer} footerText={footerText} footerSocials={footerSocials}></Footer>
    </>
  )
}
export default Home