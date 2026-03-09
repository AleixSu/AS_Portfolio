import React from 'react'

const SkillCard = ({ logo, ref }) => {
  return (
    <div className='logos hidden' ref={ref}>
      <img src={logo} alt='logoImg' />
    </div>
  )
}

export default SkillCard
