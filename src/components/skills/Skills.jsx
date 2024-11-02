import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'


const Skills = () => {
  return (
    <section className="skills section" id="Skills">
    <h2 className="section__title">Skills</h2>
    <span className="section__subtitle"></span>
    <div className="skills__container container grid">
      <Frontend></Frontend>
      <Backend></Backend>
    </div>



    </section>
  )
}

export default Skills