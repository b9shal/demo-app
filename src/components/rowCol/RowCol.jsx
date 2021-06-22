import React, { useContext, useState } from 'react'
import { rowColContext } from '../../Context'

export function RowCol() {
  const { row, setRow, col, setCol } = useContext(rowColContext);

  return(
    <div>
      <label>
        Row
        <input value={row} type="number" onChange={(e) => setRow(e.target.value)} style={{width:120, height:25}}/>
      </label>
      <label>
        Column
      <input value={col} type="number" onChange={(e) => setCol(e.target.value)} style={{width:120, height:25}}>
      </input>
      </label>
    </div>
  )
}