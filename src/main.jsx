import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { NotificationsProvider } from "@mantine/notifications"
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
)
