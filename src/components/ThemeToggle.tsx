import { FaSun, FaMoon } from 'react-icons/fa'
import { useDashboardContext } from '../pages/DashboardLayout'
import Wrapper from '../assets/wrappers/ThemeToggle'

const ThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useDashboardContext()

	return (
		<Wrapper onClick={toggleDarkTheme}>
			{isDarkTheme ? <FaSun className='toggle-icon' /> : <FaMoon />}
		</Wrapper>
	)
}

export default ThemeToggle
