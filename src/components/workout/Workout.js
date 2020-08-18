import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../nav-bar/NavBar'
import styled from 'styled-components'
import Exercises from '../exercises/Exercises'
import { SecondaryButton } from '../../styles/GlobalStyle'
import Modal from '../modal/Modal'
import { fetchExercises } from '../../utils/Utils'

const Workout = () => {
	const { name } = useParams()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [needToReFetch, setNeedToReFetch] = useState(0)
	const [exercises, setExercises] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		let isMounted = true
		setIsLoading(true)
		fetchExercises(
			`http://localhost:8000/workouts/${name}`,
			setExercises,
			setIsLoading
		)
		return () => (isMounted = false)
	}, [needToReFetch, name])
	return (
		<>
			<NavBar />
			<ContentContainer>
				<Header>{name}</Header>
				<Exercises exercises={exercises} isLoading={isLoading} />
				<NewExercise
					onClick={() => {
						setIsModalOpen(true)
					}}
				>
					Add Exercise
				</NewExercise>
				<Modal
					isModalOpen={isModalOpen}
					header='Add Exercise'
					setIsModalOpen={setIsModalOpen}
					url={`http://localhost:8000/workouts/${name}`}
					setNeedToReFetch={setNeedToReFetch}
					needToReFetch={needToReFetch}
					oldExercises={exercises}
				/>
			</ContentContainer>
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
	margin-bottom: 1rem;
`

const NewExercise = styled(SecondaryButton)`
	margin-top: 2rem;
`

export default Workout
