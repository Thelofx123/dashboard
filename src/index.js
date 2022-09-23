import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { TestProvider } from './context/dataContext';
import { StrProvider } from './context/strCon';
import { StoreProvider } from './context/storeContext';
import { FireProvider } from './context/fireCon';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(

  <TestProvider>
    <StrProvider>
      <StoreProvider>
          <BrowserRouter>
             <FireProvider>
                 <App />
              </FireProvider>
          </BrowserRouter>
      </StoreProvider>
    </StrProvider>
  </TestProvider>

);


reportWebVitals();
