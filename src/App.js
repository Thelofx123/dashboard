import { Box, Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MenuPopupState from './component/navbar';
import Counter from './component/menu';
import data from "./json/menu.json"

function App() {
  return (
    <Box>
      <MenuPopupState></MenuPopupState>
      <Routes>
        <Route path="/soon" element={ <Counter />} />
    
      </Routes>
    </Box>

  );
}

export default App;
