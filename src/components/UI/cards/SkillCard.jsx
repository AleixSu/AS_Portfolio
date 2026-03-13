import React from 'react'

const SkillCard = ({ logo, ref, nameSkill }) => {
  return (
    <div className='logos hidden' ref={ref}>
      <img src={logo} alt='logoImg' />
      <div className='nameSkillDiv'>
        <h5>{nameSkill}</h5>
      </div>
    </div>
  )
}

export default SkillCard
