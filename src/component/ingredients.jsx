import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import data from "../json/ing.json"
import IngDialog from "./dialog2"

const Ing = () => {
console.log(data)
const [isTrue,setTrue] = useState(false)
const onclick = () =>{
    setTrue(!isTrue)
}
//
    return(
        <Box  sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
         
        </Box>
    )
}

export default Ing