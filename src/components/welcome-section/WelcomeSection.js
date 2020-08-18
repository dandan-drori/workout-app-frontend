import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from '../../styles/GlobalStyle'

const WelcomeSection = () => {
	return (
		<Container>
			<Header>Welcome To WorkoutMania,</Header>
			<SubHeader>Your New Workout Tracker And Advisor</SubHeader>
			<ButtonsContainer>
				<ContactButton>Contact Us</ContactButton>
				<GetStartedButton>Get Started</GetStartedButton>
			</ButtonsContainer>
		</Container>
	)
}

const Container = styled.section`
	padding: 3rem;
`

const Header = styled.p`
	font-size: 3.5em;
`

const SubHeader = styled.p`
	font-size: 1.6em;
	margin: 2rem 0;
`

const ButtonsContainer = styled.div`
	width: 12rem;
	display: flex;
	justify-content: space-between;
`

const ContactButton = styled(SecondaryButton)``

const GetStartedButton = styled(PrimaryButton)``

export default WelcomeSection
