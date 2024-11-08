import { CssBaseline, ThemeProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import { appTheme } from './themes/theme';

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/products', element: <Products /> }
]);

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<CssBaseline enableColorScheme />
			<RouterProvider router={router}></RouterProvider>
		</ThemeProvider>
	);
}

export default App;
