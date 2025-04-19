import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import router from './router/Router'
import 'primereact/resources/themes/md-light-indigo/theme.css'; // O el tema que prefieras
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
