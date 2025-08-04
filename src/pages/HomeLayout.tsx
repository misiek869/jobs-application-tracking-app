import React from 'react'
import { Outlet } from 'react-router'

const HomeLayout = () => {
	return (
		<div>
			<h1>Home</h1>
			<Outlet />
		</div>
	)
}

export default HomeLayout
