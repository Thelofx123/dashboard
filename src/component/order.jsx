import { SatelliteAlt } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useReducer, useEffect } from "react";


var intetrval;
const initialState = { clock: 0, istrue: false };


const reducer = (state, action) => {
    switch (action.type) {
        case 'start':
            return { ...state, istrue: true }
            break;
        case 'stop':
            return { ...state, istrue: false }
            break;
        case 'reset':
            return { istrue: false, clock: 0 }
            break;
        case 'tick':
            return { ...state, clock: state.clock + 1 }
        default:
            throw new Error();

    }
}


const Counter = () => {
    return (
            <Container fixed>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        </Container>
      );
}

export default Counter

