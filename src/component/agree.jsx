import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react"
import { useState } from "react"
import Accord from "./accordation"

 
 
 const AccordWrap = ({data,date,type}) => {
       const [number,setNumber] = useState()
      

      useEffect(() =>{
        for (let i = 0; i < data.length; i++) {
            data[i].date === date && data[i].type === type ? setNumber(i+1) : setNumber(0)
          }
      },[type,date])
      console.log(number)
    return(
    <Box sx={{ minWidth: '300px',background:'#F5F5F7', height: '80vh',  padding: '20px' }}>
     <Typography>ALL: {number}</Typography>
      { data.map((e,l) => e.date === date && e.type === type ?  <Accord data={e} type={type} ></Accord> : null) }
  
  </Box>
    )
 } 
 
 export default AccordWrap