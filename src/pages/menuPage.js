import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MaxWidthDialog from "../component/order";
import { useGetDocsFromFireBase } from "../firebase";


const Counter = () => {

    const  {data } = useGetDocsFromFireBase("recipe")
    console.log(data)
    return (
        <Box  sx={{width:'100%',margin:'auto'}}>
            <Box sx={{width:'80%',height:'60px',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:'auto'}}>

                <Box sx={{display:'flex'}}>
                <Typography>Хоолны сан *  </Typography>
                <Typography>{data.length}</Typography>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between'}}> 
          <MaxWidthDialog></MaxWidthDialog>
          </Box>

            </Box>
            <Divider></Divider>
            <Box  sx={{width:'80%',margin:'auto',padding:'10px',display:'flex',}} > 

            <Grid container spacing={8} >
                {data.map((e,i) => 
                 <Grid key={i} item xs={10} md={6} xl={3}  lg={3} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Card sx={{ minWidth: 250,height:'300px'}}>
          <CardMedia
            component="img"
            alt="green iguana"
            width='148'
            height='148'
            image={e.url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {e.name}
            </Typography>
          </CardContent>
          <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
          <Typography gutterBottom variant="h5" component="div">
              {e.price}
            </Typography>
            <Button sx={{borderRadius:'40px'}} variant="outlined" size='small'>-</Button>
          </CardActions>
        </Card>
        </Grid>
                )}
        </Grid>
        </Box>
        
        
        </Box>
      );
}

export default Counter

