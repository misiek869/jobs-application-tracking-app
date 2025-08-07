import { Link, useRouteError } from 'react-router'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
	const error = useRouteError()

	return (
		<div>
			<h1>Error</h1>
			<Link to={'/'}>Home</Link>
		</div>
	)
}

export default Error
