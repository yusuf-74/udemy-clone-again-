import React from 'react'
import MainCourseSection from './MainCourseSection'
import MainFooter from './MainFooter'
import MainHeader from './MainHeader'
import MainNavBar from './MainNavBar'
import TopCatigories from './TopCatigories'

function HomePage() {
  return (
    <>
    <div className="main-content-home">
        <MainHeader />
        <MainCourseSection/>
        <TopCatigories/>
       
      </div>
    </>
   
  )
}

export default HomePage