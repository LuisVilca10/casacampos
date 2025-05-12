import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import router from './router/Router'
import { UserProvider   } from './context/UserContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>

)
