import SkillCard from '../../components/UI/cards/SkillCard'
import { logoArrays } from '../../constants/arrays'
import { textAndTitles } from '../../constants/portfolioTextAndTitles'
import { profileInfo } from '../../constants/profileInfo'
import { useLanguageContext } from '../../context/languageContext'
import { useFixedOnScroll } from '../../utils/hooks/useFIxedOnScroll'
import { useShownOnScroll } from '../../utils/hooks/useShownOnScroll'
import './SkillsAndExp.css'

import React, { useRef } from 'react'

const SkillsAndExp = () => {
  const { currentLanguage } = useLanguageContext()
  const textAndTitlesCL = textAndTitles[currentLanguage]
  const profileInfoCL = profileInfo[currentLanguage]

  const ref = useRef(null)
  const isFixed = useFixedOnScroll(ref)
  const observerRefs = useRef([])
  useShownOnScroll(observerRefs)

  return (
    <section
      id='skillsExpContent'
      className={isFixed ? 'fixedSE' : 'skillsExpContent'}
      ref={ref}
    >
      <article className='expDiv'>
        <h2 className='skillsTitle'>{textAndTitlesCL.expSkillsH2E}</h2>
        <p className='expP'>{profileInfoCL.expInfo} </p>
      </article>
      <article className='skillsDiv'>
        <h2 className='skillsTitle'>{textAndTitlesCL.expSkillsH2S} </h2>
        <div className='logoDiv'>
          {logoArrays.map((logo, i) => (
            <SkillCard
              key={i}
              logo={logo.img}
              ref={(cardS) => (observerRefs.current[i] = cardS)}
              nameSkill={logo.nameSkill}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default SkillsAndExp
