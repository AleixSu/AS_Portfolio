import { textAndTitles } from '../../constants/portfolioTextAndTitles'
import { profileInfo } from '../../constants/profileInfo'
import { useLanguageContext } from '../../context/languageContext'
import { useFixedOnScroll } from '../../utils/hooks/useFIxedOnScroll'
import './AboutMe.css'

import React, { useRef } from 'react'

const AboutMe = () => {
  const ref = useRef(null)
  const isFixed = useFixedOnScroll(ref)
  const { currentLanguage } = useLanguageContext()
  const textAndTitlesCL = textAndTitles[currentLanguage]
  const profileInfoCL = profileInfo[currentLanguage]

  return (
    <section
      id='aboutMeInfo'
      className={isFixed ? 'fixedAM' : 'aboutMeInfo'}
      ref={ref}
    >
      <h2>{textAndTitlesCL.aboutMeH2}</h2>
      <p id='aboutMeP'>{profileInfoCL.userAboutMe}</p>
      <article className='infoDiv'>
        <h3 className='infoTitle'>{textAndTitlesCL.aboutMeH3T}</h3>
        <p className='infoP'>{profileInfoCL.userTechnical}</p>
      </article>
      <article className='infoDiv'>
        <h3 className='infoTitle'>{textAndTitlesCL.aboutMeH3P}</h3>
        <p className='infoP'>{profileInfoCL.userPersonal}</p>
      </article>
    </section>
  )
}

export default AboutMe
