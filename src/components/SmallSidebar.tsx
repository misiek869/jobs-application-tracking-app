import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import { IoClose } from 'react-icons/io5'
import Logo from './Logo'
import links from '../utils/links'
import { NavLink } from 'react-router'

const SmallSidebar = () => {
	const { showSidebar, toggleSidebar } = useDashboardContext()

	return (
		<Wrapper>
			<div
				className={
					showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
				}>
				<div className='content'>
					<button className='close-btn' onClick={toggleSidebar}>
						<IoClose />
					</button>
					<header>
						<Logo />
					</header>
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
				</div>
			</div>
		</Wrapper>
	)
}

export default SmallSidebar
