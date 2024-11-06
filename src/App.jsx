import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/products', element: <Products /> }
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
