import React from 'react'

const ContactItem = (items) => {
  return items.map(({type, url}, index) => {
    return (
      <li key={index}>
        <a href={url} target="_blank">{type}</a>
      </li>
    )
  })
}

const ContactList = (props) => {
  return (
    <ul>
      {ContactItem(props.items)}
    </ul>
  )
}

export default ContactList
