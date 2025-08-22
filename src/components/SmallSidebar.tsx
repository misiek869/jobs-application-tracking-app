import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import { IoClose } from 'react-icons/io5'
import Logo from './Logo'
import links from '../utils/links'
import { NavLink } from 'react-router'

const SmallSidebar = () => {
	const data = useDashboardContext()

	return (
		<Wrapper>
			<div className='sidebar-container show-sidebar'>
				<div className='content'>
					<button className='close-btn'>
						<IoClose />
					</button>
					<header>
						<Logo />
					</header>
					<div className='nav-links'>
						{links.map(link => {
							const { text, icon, path } = link
							return (
								<NavLink to={path} key={text} className='nav-link'>
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
