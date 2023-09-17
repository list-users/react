import { createBrowserRouter, Link} from 'react-router-dom';
import App from './App';
import Todo from './Container/Todo';
// import Login from './Container/Auth/Login';
import TextInput from './Component/TextInput';

const router = createBrowserRouter([
    {path: "/",
        element: (
            // 
            <div>
                <TextInput/>
                <h1>login </h1>
            </div>
        ),
    },
    {
        path: 'about',
        element: (
            <div>
                <h1>about</h1>
                <Link to="/">go back</Link>
            </div>
        )
    },
     {
        path: 'todoapp',
        element: (
            <Todo/>
        )
    },
])

export default router;