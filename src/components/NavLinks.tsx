import links from '../utils/links'
import { useDashboardContext } from '../pages/DashboardLayout'
import { NavLink } from 'react-router'

const NavLinks = () => {
	const { toggleSidebar, user } = useDashboardContext()

	return (
		<div className='nav-links'>
			{links.map(link => {
				const { text, icon, path } = link
				return (
					<NavLink
						onClick={toggleSidebar}
						end
						to={path}
						key={text}
						className='nav-link'>
						<span className='icon'>{icon}</span> {text}
					</NavLink>
				)
			})}
		</div>
	)
}

export default NavLinks
