import { Box, Container } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MenuPopupState from './component/navbar';
import Counter from './component/menu';
import data from "./json/menu.json"
import StickyHeadTable from './component/card';
import { ThemeProviderStyles } from './theme/theme';
import SignUp from './signUp';
import SignIn from './signIn';
import { useFireCon } from './context/fireCon';
import { auth } from './firebase';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const {docData, setDocData} = useFireCon()

  useEffect(() =>{
    onAuthStateChanged(auth,(data) =>{
      console.log(data)
      if(data){
        alert('logged in')
        setDocData(true)
      }
      else{
        setDocData(false)
      }
    })
  },[])
  return (
    <ThemeProviderStyles>
    <Box>
      <MenuPopupState></MenuPopupState>

        {docData === true ? <Routes>
          <Route path="/soon" element={ <Counter />} />
        <Route path="/order" element={<StickyHeadTable/>}/>
        <Route path="/signup" element={<SignUp/>}/>
  
        </Routes> : 
        <Routes>
          <Route path="/signin" element={<SignIn/>}/>
          </Routes>}
       
        
    </Box>
    </ThemeProviderStyles>
  );
}

export default App;
