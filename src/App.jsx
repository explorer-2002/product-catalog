
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from './ui/AppLayout'    // defines the layout of the application
import Products from './Products/Products'
import DetailedProductInfo from './Products/DetailedProductInfo'

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/products" />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<DetailedProductInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
