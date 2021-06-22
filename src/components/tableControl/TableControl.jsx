import React, { useContext, useState } from "react"
import { rowColContext } from "../../Context"

export function TableControl() {
  const { row, setRow, col, setCol } = useContext(rowColContext)
  return(
    <div style={{marginLeft:100}}>
      <div style={{marginLeft:67, marginBottom:15, cursor: "pointer"}}>
        <i className="fas fa-arrow-up"></i>
      </div>
      <div style={{display:"flex", justifyContent:"space-around", marginLeft:30}}>
        <i style={{cursor:"pointer"}}
          className="fas fa-arrow-left"></i>
        <i
          style={{marginLeft:60, cursor:"pointer"}}
          className="fas fa-arrow-right"/>
      </div>
      <div style={{marginLeft:67, marginTop: 15}}>
        <i
          style={{cursor:"pointer"}}
          className="fas fa-arrow-down"></i>
      </div>
    </div>
  )
}