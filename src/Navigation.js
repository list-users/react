import { createBrowserRouter, Link } from 'react-router-dom';
import App from './App';
import Todo from './Container/Todo';
import Login from './Container/Auth/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Login />)
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
        element: (<Todo/>)
    },
])

export default router;