import React from "react"
import './Display.css'

const Display = (props) => {
  return <p className="display__content">{props.operacao}</p>
}

export default Display