import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { useState } from "react"
import Accord from "./accordation"
import { useFireCon } from "../context/fireCon";

const AccordWrap = ( {data,date, type, orderList, refresh }) => {
  const [number, setNumber] = useState()
  console.log(data)
  return (
   
      <Accord data={data} type={type} orderList={orderList} refresh={refresh}  ></Accord> 
 
  )
}

export default AccordWrap