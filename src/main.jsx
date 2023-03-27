import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Provider } from 'react-redux'
import store from './redux/store'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
