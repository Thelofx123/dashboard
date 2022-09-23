import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeProviderStyles } from './theme/theme';
import SignUp from './signUp';
import SignIn from './signIn';
import { useFireCon } from './context/fireCon';
import { Layout } from './layout';
import Chart from './pages/graphPage';
import Counter from './pages/menuPage';
import StickyHeadTable from './pages/orderPage';

const App = () => {

  const { docData } = useFireCon()
  return (
    <ThemeProviderStyles>
      <Box>
        <Routes>
        {docData ?
          <Route path="/" element={<Layout />}>
            <Route path="/soon" element={<Counter />} />
            <Route path="/order" element={<StickyHeadTable />} />
            <Route path="/graph" element={<Chart />} />
            <Route path="*" element={<h1>Under Construction</h1>} />
          </Route>
          :<Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>}
        </Routes>
      </Box>
    </ThemeProviderStyles>
  );
}

export default App;
