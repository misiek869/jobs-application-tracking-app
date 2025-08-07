import Wrapper from '../assets/wrappers/RegisterPage'
import { Link } from 'react-router'
import { Logo } from '../components'

const Register = () => {
	return (
		<Wrapper>
			<form className='form'>
				<Logo />
				<h4>Register</h4>
				<div className='form-row'>
					<label htmlFor='name' className='form-label'>
						name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						className='form-input'
						defaultValue={'Michael'}
						required
					/>
				</div>
				<button type='submit' className='btn btn-block'>
					submit
				</button>
				<p>
					Already have an account?
					<Link to={'/login'} className='member-btn'>
						Login
					</Link>
				</p>
			</form>
		</Wrapper>
	)
}

export default Register
