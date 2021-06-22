import React, { useContext, useRef, useState } from "react"
import { rowColContext  } from "../../Context"

export function Table() {
  const { row, col, setRow, setCol } = useContext(rowColContext)
  const [onCellSelect, setOnCellSelect] = useState(false)
  let rowArr = []
  let colArr = []

  for(let i=0; i< row; i++){
    rowArr.push(1)
  }
  for(let i=0; i< col; i++){
    colArr.push(1)
  }
  const cellStyle = {
    border:"1px solid black", 
    padding: 15, 
    cursor: "pointer"
  }

  const cellClickHandle = (index) => {
    setOnCellSelect(!onCellSelect)
    console.log(index, onCellSelect)
  }

  return(
    <div style={{marginLeft: 200, border: "1px solid black"}}>
      <table>
        <tbody>
          {
            rowArr.map((value, rowIndex) => <tr style={{border:"1px solid black"}}
            key={rowIndex}>{colArr.map((value, colIndex) =>
            <td key={`${rowIndex}${colIndex}`} onClick={() => cellClickHandle(`${rowIndex}${colIndex}`) } 
            style={onCellSelect ? cellStyle : {...cellStyle, background:"#456754"}}
            className={onCellSelect ? {cellStyle} : null }>{value}</td>)}</tr>)
          }
        </tbody>
      </table>
    </div>
  )
}