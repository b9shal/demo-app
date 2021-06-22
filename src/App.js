import { useState } from "react"
import { RowCol } from "./components/rowCol/RowCol"
import { Table } from "./components/table/Table"
import { TableControl } from "./components/tableControl/TableControl"
import { rowColContext } from "./Context"


function App() {
  const [row, setRow] = useState(3)
  const [col, setCol] = useState(4)

  return (
    <div style={{display:"flex", margin: 50, justifyItems:"center", alignItems:"center", background:"efefef"}}>
      <rowColContext.Provider value={{row, setRow, col, setCol}}>
        <RowCol/>
        <TableControl/>
        <Table/>
      </rowColContext.Provider>
    </div>
  );
}

export default App;
