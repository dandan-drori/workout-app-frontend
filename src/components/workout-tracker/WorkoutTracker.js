import React, { useState } from 'react'
import NavBar from '../nav-bar/NavBar'
import Modal from '../modal/Modal'
import styled from 'styled-components'
import { SecondaryButton } from '../../styles/GlobalStyle'
import Workouts from '../workouts/Workouts'

const WorkoutTracker = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [needToReFetch, setNeedToReFetch] = useState(0)
	return (
		<>
			<NavBar />
			<ContentContainer>
				<Header>Your Workouts</Header>
				<Workouts
					needToReFetch={needToReFetch}
					setNeedToReFetch={setNeedToReFetch}
				/>
				<NewWorkout
					onClick={() => {
						setIsModalOpen(true)
					}}
				>
					New Workout
				</NewWorkout>
			</ContentContainer>
			<Modal
				isModalOpen={isModalOpen}
				header='Add Workout'
				setIsModalOpen={setIsModalOpen}
				url='http://localhost:8000/workouts'
				setNeedToReFetch={setNeedToReFetch}
				needToReFetch={needToReFetch}
			/>
		</>
	)
}

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 1rem;
`

const Header = styled.p`
	font-size: 1.5em;
	margin-bottom: 2rem;
`

const NewWorkout = styled(SecondaryButton)`
	margin-top: 2rem;
`

export default WorkoutTracker
