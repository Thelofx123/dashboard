import { Box, Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MenuPopupState from './component/navbar';
import Counter from './component/menu';
import data from "./json/menu.json"
import StickyHeadTable from './component/card';
import { ThemeProviderStyles } from './theme/theme';

function App() {
  return (
    <ThemeProviderStyles>
    <Box>
      <MenuPopupState></MenuPopupState>
      <Routes>
        <Route path="/soon" element={ <Counter />} />
        <Route path="/order" element={<StickyHeadTable/>}/>
      </Routes>
    </Box>
    </ThemeProviderStyles>
  );
}

export default App;
