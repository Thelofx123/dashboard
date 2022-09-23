import { Box, Typography } from "@mui/material"

const SquareBox = ({ data, name }) => {

    return (
        <Box sx={{ width: '200px', 
        height: '150px', 
        border: '1px solid grey', 
        background: '#fff', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: '20px', 
        flexDirection: 'column' }}>
            <Typography sx={{ color: '#000' }}>{name}</Typography>
            <Typography sx={{ color: '#000' }}>{data}</Typography>
        </Box>
    )
}
export default SquareBox