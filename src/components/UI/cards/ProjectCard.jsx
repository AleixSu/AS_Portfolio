import React from 'react'

const ProjectCard = ({ project, ref }) => {
  const handleMouseEnter = (e) => e.target.play()
  const handleMouseLeave = (e) => {
    e.target.pause()
    e.target.currentTime = 0
  }

  return (
    <div className='projectCardDiv hidden' ref={ref}>
      <div className='projectCard'>
        <video
          src={project.projectVID}
          muted
          loop
          playsInline
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <h4 className='projectTag'>{project.projectName}</h4>
        <a className='projectTag' href={project.projectGH} target='_blank'>
          Go to GitHub
        </a>
        <a className='projectTag' href={project.projectURL} target='_blank'>
          Go to live
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
