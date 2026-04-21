import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import RootLayout from './layout/RootLayout'
import Home from './Pages/home/Home'
import Timeline from './Pages/timeline/Timeline'
import Stats from './Pages/stats/Stats'
import FriendDetails from './Pages/friendDetails/FriendDetails'
import CallProvider from './context/CallProvider'
import NotFound from './Pages/notfound/NotFound'

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout />,
    children:[
    {
    index:true,
    element: <Home />
  },
  {
    path:'/timeline',
    element: <Timeline />
  },
  {
    path:'/stats',
    element: <Stats />
  },
  {
    path:'/friendDetails/:id',
    element:<FriendDetails />
  }
 
    ],
    errorElement: <NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallProvider>
       <RouterProvider router={router} />
     <ToastContainer />
    </CallProvider>
  </StrictMode>,
)
