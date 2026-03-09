import ProjectCard from '../../components/UI/cards/ProjectCard'
import { projectArray } from '../../constants/arrays'
import { textAndTitles } from '../../constants/portfolioTextAndTitles'
import { useLanguageContext } from '../../context/languageContext'
import { useFixedOnScroll } from '../../utils/hooks/useFIxedOnScroll'
import { useShownOnScroll } from '../../utils/hooks/useShownOnScroll'
import './MyWork.css'
import React, { useRef } from 'react'

const MyWork = () => {
  const { currentLanguage } = useLanguageContext()
  const textAndTitlesCL = textAndTitles[currentLanguage]

  const ref = useRef(null)
  const isFixed = useFixedOnScroll(ref)
  const observerRefs = useRef([])
  useShownOnScroll(observerRefs)

  return (
    <section
      id='myWorkContent'
      className={isFixed ? 'fixedMW' : 'myWorkContent'}
      ref={ref}
    >
      <article className='myWorkDiv'>
        <h2 className='myWorkTitle'>{textAndTitlesCL.myWorkH2}</h2>
        <div id='cardDiv'>
          {projectArray.map((project, i) => (
            <ProjectCard
              project={project}
              key={i}
              ref={(cardP) => (observerRefs.current[i] = cardP)}
            />
          ))}
        </div>
      </article>
    </section>
  )
}

export default MyWork
