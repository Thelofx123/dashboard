import { useState } from "react"
import Accord from "./accordation"

const AccordWrap = ( {data, type, orderList, refresh }) => {
  console.log(data)
  return (
   
      <Accord data={data} type={type} orderList={orderList} refresh={refresh}  ></Accord> 
 
  )
}

export default AccordWrap