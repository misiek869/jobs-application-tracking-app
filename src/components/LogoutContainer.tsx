import { FaRegUser } from 'react-icons/fa'
import { FaCaretDown } from 'react-icons/fa6'
import Wrapper from '../assets/wrappers/LogoutContainer'
import { useDashboardContext } from '../pages/DashboardLayout'
import { useState } from 'react'

const LogoutContainer = () => {
	const [showLogout, setShowLogout] = useState<boolean>(false)
	const { user, logout } = useDashboardContext()

	return (
		<Wrapper>
			<button
				className='btn logout-btn'
				onClick={() => {
					setShowLogout(!showLogout)
				}}></button>
		</Wrapper>
	)
}

export default LogoutContainer
