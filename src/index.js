import ReactDOM from 'react-dom/client';
import {RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { appRoutes } from './Routes/appRoutes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRoutes}/>
);
