import React from 'react'
import styled from 'styled-components'
import Exercise from '../exercise/Exercise'
import Spinner from '../spinner/Spinner'

const Exercises = ({ exercises, isLoading }) => {
	if (exercises.length < 1 && isLoading) {
		return <Spinner />
	}
	return (
		<List>
			{exercises.length < 1 ? (
				<NoExercisesMessage>No Exercises...</NoExercisesMessage>
			) : (
				exercises.map((exercise, index) => (
					<Exercise
						key={index}
						name={exercise.name}
						sets={exercise.sets}
						reps={exercise.reps}
						weight={exercise.weight}
					/>
				))
			)}
		</List>
	)
}

const List = styled.ul``

const NoExercisesMessage = styled.p`
	font-size: 1.2em;
	margin-top: 1rem;
`

export default Exercises
