import { RouterProvider } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

import './global.css'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate='%s | FoodShop' />
      <Toaster richColors/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}