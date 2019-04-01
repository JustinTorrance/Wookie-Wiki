import React from 'react'

const Card = (props) => {
  const mappedProps = Object.keys(props).map(prop => {
    if (prop === 'residents') {
      let residents = props[prop].map(resident => {
        return resident
      })
      return <div><h4>{prop}:</h4> <p>{residents}</p></div>        
    } else {
      return <div><h4>{prop}:</h4> <p>{props[prop]}</p></div>
    }
  })

  return (
    <article>
      <h3>{props.name}</h3>
      {mappedProps}
    </article>
  )
}

export default Card