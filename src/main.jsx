import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/poppins";
import { FormProvider } from './contexts/FormContext.jsx';

createRoot(document.getElementById('root')).render(
  <FormProvider>
    <App />
  </FormProvider>,
)
