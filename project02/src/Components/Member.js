import React from 'react'

const Member = ({ teamName, name }) => {
  return (
    <div>
      <fieldset className='field'>

        <p id="team">{teamName}</p>
        <p id="name">{name}</p>

      </fieldset>
    </div>
  )
}

export default Member
