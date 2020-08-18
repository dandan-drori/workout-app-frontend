import React, { useState, useEffect } from 'react'
import { handleSubmit } from '../../utils/Utils'
import styled from 'styled-components'
import cogoToast from 'cogo-toast'
import { Link, Redirect } from 'react-router-dom'

const SignUp = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [isNameInputEmpty, setIsNameInputEmpty] = useState(true)
	const [isPasswordInputEmpty, setIsPasswordInputEmpty] = useState(true)
	const [isEmailInputEmpty, setIsEmailInputEmpty] = useState(true)
	const [response, setResponse] = useState('')

	useEffect(() => {
		if (response.message !== '') {
			if (response.message === 'Created user successfully') {
				cogoToast.success(response.message)
				setName('')
				setEmail('')
				setPassword('')
			}
			if (response.message === 'Email address already exists!') {
				cogoToast.error(response.message)
			}
		}
	}, [response])

	if (response.message !== '') {
		if (response.message === 'Created user successfully') {
			return <Redirect to='/sign-in' />
		}
	}

	return (
		<Container>
			<Form
				onSubmit={e => {
					e.preventDefault()
					if (name === '' || email === '' || password === '') {
						cogoToast.error('Fields cannot be left empty')
						return
					}
					if (password.length < 8) {
						cogoToast.error('Password Must be at least 8 characters')
						return
					}
					handleSubmit(
						e,
						'http://localhost:8000/users/signup',
						name,
						password,
						email,
						setResponse
					)
				}}
			>
				<Header>Sign Up</Header>
				<InputWrapper>
					<Input
						type='text'
						name='name'
						value={name}
						onChange={e => {
							setName(e.target.value)
							if (e.target.value !== '') {
								setIsNameInputEmpty(false)
							} else {
								setIsNameInputEmpty(true)
							}
						}}
					/>
					<Label isInputEmpty={isNameInputEmpty}>First Name</Label>
					<Span></Span>
				</InputWrapper>
				<InputWrapper>
					<Input
						type='password'
						name='password'
						value={password}
						onChange={e => {
							setPassword(e.target.value)
							if (e.target.value !== '') {
								setIsPasswordInputEmpty(false)
							} else {
								setIsPasswordInputEmpty(true)
							}
						}}
					/>
					<Label isInputEmpty={isPasswordInputEmpty}>Password</Label>
					<Span></Span>
				</InputWrapper>
				<InputWrapper>
					<Input
						type='email'
						name='email'
						value={email}
						onChange={e => {
							setEmail(e.target.value)
							if (e.target.value !== '') {
								setIsEmailInputEmpty(false)
							} else {
								setIsEmailInputEmpty(true)
							}
						}}
					/>
					<Label isInputEmpty={isEmailInputEmpty}>Email</Label>
					<Span></Span>
				</InputWrapper>
				<Submit type='submit' value='Sign Up' />
				<LinkMessage>
					Already have an account? <Link to='/sign-in'>Sign In</Link>
				</LinkMessage>
			</Form>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 90vh;
	width: 99vw;
	justify-content: center;
	align-items: center;
`

const Header = styled.p`
	font-size: 1.5em;
	margin-bottom: 2rem;
`

const Form = styled.form`
	padding: 2rem 5rem;
	border-radius: 1rem;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Input = styled.input`
	display: block;
	margin: 0.5rem 0;
	border: none;
	padding: 0.5rem 0;
	outline: none;
	background-color: transparent;
	transition: 1s ease-in-out;
	border-bottom: 1px solid grey;

	&:focus ~ Span {
		width: 100%;
		transition: 0.4s;
	}

	&:focus ~ Label {
		top: -5px;
		font-size: 12px;
		color: #3399ff;
		transition: 0.3s;
	}
`

const InputWrapper = styled.div`
	position: relative;
`

const Span = styled.span`
	position: absolute;
	bottom: 0.41rem;
	left: 0;
	width: 0;
	height: 2px;
	background-color: #3399ff;
	transition: 0.4s;
`

const Label = styled.label`
	position: absolute;
	left: 0;
	width: 100%;
	top: 9px;
	transition: 0.3s;
	z-index: -1;
	letter-spacing: 0.5px;
	color: ${({ isInputEmpty }) => (isInputEmpty ? '#aaa' : '#3399ff')};
	top: ${({ isInputEmpty }) => (isInputEmpty ? '9px' : '-5px')};
	font-size: ${({ isInputEmpty }) => (isInputEmpty ? 'initial' : '12px')};
`

const Submit = styled.input`
	padding: 0.4rem 0.6rem;
	border-radius: 1rem;
	margin-top: 1.5rem;
	cursor: pointer;
	border: none;
	background-color: #3399ff;
	color: #eee;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
`

const LinkMessage = styled.p`
	font-size: 1em;
	margin-top: 1rem;
`

export default SignUp
