import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { ChakraProvider } from '@chakra-ui/react'
// import { ClerkProvider } from '@clerk/clerk-react'
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
    <ChakraProvider>
   <RouterProvider router={router} />
    </ChakraProvider>
    {/* </ClerkProvider> */}
  </React.StrictMode>,
)
