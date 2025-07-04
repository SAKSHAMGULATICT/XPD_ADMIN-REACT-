import React from 'react';
import ReactDOM from 'react-dom/client';
import '@cleartax/truss/index.css';
import './styles/globals.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './services/query-client';
import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './app/auth/auth-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <AuthProvider> */}
          <App />
        {/* </AuthProvider> */}
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
