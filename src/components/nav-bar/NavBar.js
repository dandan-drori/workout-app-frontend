import React from 'react'
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import { PrimaryButton } from '../../styles/GlobalStyle'

const NavBar = () => {
	return (
		<Container>
			<Logo>
				<StyledLink to='/'>WorkoutMania</StyledLink>
			</Logo>
			<FlexWrapper>
				<List>
					<Item>
						<StyledLink to='/workout-tracker'>Workout Tracker</StyledLink>
					</Item>
					<Item>
						<StyledLink to='/food-tracker'>Food Tracker</StyledLink>
					</Item>
				</List>
				<SignOutButton
					onClick={() => {
						localStorage.setItem('token', '')
					}}
				>
					Sign Out
				</SignOutButton>
			</FlexWrapper>
		</Container>
	)
}

const Container = styled.div`
	background-color: #ff4433;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3rem;
`

const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 40%;
`

const List = styled.ul`
	display: flex;
	justify-content: space-evenly;
	width: 80%;
	align-items: center;
`

const Item = styled.li`
	list-style: none;
`

const Logo = styled.p`
	margin-left: 1rem;
`

const StyledLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	font-size: 1.2em;
`

const SignOutButton = styled(PrimaryButton)`
	margin-right: 1rem;
	text-decoration: underline;
`

export default NavBar
