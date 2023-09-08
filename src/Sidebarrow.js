import React from 'react'
import "./Sidebarrow.css"

function Sidebarrow({  Selected,Icon ,title}) {
  return (
    <div className= {`Sidebarrow  ${Selected && `Selected`}`} >
   <Icon className="Sidebarrow_icon" />
    <h2 className="Sidebarrow_title">{title}</h2>
    </div>
  )
}

export default Sidebarrow




