import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>Hello world!</div>,
	},
	{
		path: '/about',
		element: <div>Hello about</div>,
	},
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
