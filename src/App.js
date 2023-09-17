import './App.css';
import Todo from './Container/Todo';
import {RouterProvider} from 'react-router-dom';
import router from './Navigation';

function App() {
  return(
    <RouterProvider router={router} />
  )
}

export default App;
