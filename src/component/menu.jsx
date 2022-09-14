import { Margin, SatelliteAlt } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useReducer, useEffect, useState, useMemo } from "react";
import data1 from '../json/menu.json'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Order from "./order";
import MaxWidthDialog from "./order";
import InputBase from '@mui/material/InputBase';
import Ing from "./ingredients";
import { useGetDocsFromFireBase } from "../firebase";



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      height:'20px',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '100%',
          height:'20px',
        },
      },
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const Counter = () => {

    const [isTrue,setTrue] = useState(false)
    const onclick = () => {
        setTrue(!isTrue)
    }
    const data = useGetDocsFromFireBase("recipe")
    return (
        <Box  sx={{width:'100%',margin:'auto'}}>
            <Box sx={{width:'70%',height:'60px',display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'auto',marginTop:'60px',alignItems:'center'}}>

                <Box sx={{display:'flex'}}>
                <Typography>Хоолны сан *  </Typography>
                <Typography>{data[0].length}</Typography>
                </Box>
                <Box sx={{display:'flex',width:'20%',justifyContent:'space-around'}}>
                <Search sx={{border:'1px solid black'}}>
          
            <SearchIconWrapper>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
       
            />
          </Search>
          <MaxWidthDialog></MaxWidthDialog>
          </Box>
            </Box>
            <Divider></Divider>
            <Box  sx={{width:'80%',margin:'auto',marginTop:'30px' ,display:'flex',}} > 

            <Grid container spacing={8} >
                {data[0].map((e,i) => 
                 <Grid key={i} item xs={10} md={6} xl={3}  lg={3} sx={{display:'flex',alignItems:'center',justifyContent:'center',margin:'auto'}}>
                    <Card sx={{ width: 350,height:'300px'}}>
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

