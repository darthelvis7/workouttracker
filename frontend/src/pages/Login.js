import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {login, error, isLoading} = useLogin() 

	const handleSubmit = async (e) => {
		e.preventDefault()
		await login(email, password)
	}

	return (
		<form className='login' onSubmit={handleSubmit}>
			<h3>Log in</h3>
			<label>Email:</label>
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<label>Password:</label>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>
			<button disabled={isLoading}>Log in</button>
			{error && <div className='error'>{error}</div>}
			<div className='already'>
			<p>Don't have an account? </p>
			<Link className='already-link' to="/signup">Signup</Link>
		</div>
		</form>
	)
}

export default Login
