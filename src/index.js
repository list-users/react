import React from 'react';
import { createRoot } from 'react-dom/client';
import router from './Navigation';
import App from './App';
import {RouterProvider} from 'react-router-dom';
const root = createRoot(document.getElementById('root'));
root.render(<App/>);
