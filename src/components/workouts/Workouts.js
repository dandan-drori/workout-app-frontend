import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import WorkoutItem from '../workout-item/WorkoutItem'
import { fetchData } from '../../utils/Utils'
import Spinner from '../spinner/Spinner'

const Workouts = ({ needToReFetch, setNeedToReFetch }) => {
	const [workouts, setWorkouts] = useState({ workouts: [] })
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		let isMounted = true
		setIsLoading(true)
		fetchData('http://localhost:8000/workouts', setWorkouts, setIsLoading)
		return () => (isMounted = false)
	}, [needToReFetch])
	if (!workouts.workouts.workouts && isLoading) {
		return <Spinner />
	}
	return (
		<List>
			{workouts.workouts.length < 1 ? (
				<NoWorkoutsMessage>You have no workouts...</NoWorkoutsMessage>
			) : (
				workouts.workouts.map((workout, index) => (
					<WorkoutItem
						key={index}
						name={workout.name}
						needToReFetch={needToReFetch}
						setNeedToReFetch={setNeedToReFetch}
					/>
				))
			)}
		</List>
	)
}

const NoWorkoutsMessage = styled.p`
	font-size: 1.1em;
`

const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default Workouts
