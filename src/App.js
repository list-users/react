import './App.css';
import Todo from './Container/Todo';
import {RouterProvider} from 'react-router-dom';
import router from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <RouterProvider router={router} />
  )
}

export default App;
