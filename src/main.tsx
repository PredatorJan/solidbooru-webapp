import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import ErrorPage from './pages/error-page'
import Conversations from './pages/Conversations'
import Images from './pages/Images'


export const BaseUrl: string = "/solidbooru-webapp/"

const router = createBrowserRouter([
  {
    path: BaseUrl + "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "conversations",
        element: <Conversations />,
      },
      {
        path: "images",
        element: <Images />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
