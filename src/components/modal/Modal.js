import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../../styles/GlobalStyle'
import cogoToast from 'cogo-toast'
import { postData, editExercises } from '../../utils/Utils'

const Modal = ({
	isModalOpen,
	header,
	setIsModalOpen,
	url,
	setNeedToReFetch,
	needToReFetch,
	oldExercises,
}) => {
	const [name, setName] = useState('')
	const [sets, setSets] = useState(null)
	const [reps, setReps] = useState(null)
	const [weight, setWeight] = useState(null)
	const containerRef = useRef(null)
	return (
		<Container
			isModalOpen={isModalOpen}
			onClick={e => {
				if (e.target === containerRef.current) {
					setIsModalOpen(false)
				}
			}}
			ref={containerRef}
		>
			<ContentContainer>
				<Header>{header}</Header>
				<Label>
					Name:{' '}
					<Input
						type='text'
						autoCapitalize='on'
						autoFocus={true}
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</Label>
				<ExerciseOnly header={header}>
					<Label>
						Sets:{' '}
						<Select
							defaultValue='1'
							onChange={e => {
								setSets(e.target.value)
							}}
						>
							<Option value='1'>1</Option>
							<Option value='2'>2</Option>
							<Option value='3'>3</Option>
							<Option value='4'>4</Option>
							<Option value='5'>5</Option>
						</Select>
					</Label>
					<Label>
						Reps:{' '}
						<Select
							defaultValue='1'
							onChange={e => {
								setReps(e.target.value)
							}}
						>
							<Option value='1'>1</Option>
							<Option value='2'>2</Option>
							<Option value='3'>3</Option>
							<Option value='4'>4</Option>
							<Option value='5'>5</Option>
							<Option value='6'>6</Option>
							<Option value='7'>7</Option>
							<Option value='8'>8</Option>
							<Option value='9'>9</Option>
							<Option value='10'>10</Option>
							<Option value='11'>11</Option>
							<Option value='12'>12</Option>
							<Option value='13'>13</Option>
							<Option value='14'>14</Option>
							<Option value='15'>15</Option>
							<Option value='16'>16</Option>
							<Option value='17'>17</Option>
							<Option value='18'>18</Option>
							<Option value='19'>19</Option>
							<Option value='20'>20</Option>
						</Select>
					</Label>
					<Label>
						Weight:{' '}
						<WeightInput
							type='text'
							autoCapitalize='sentences'
							autoFocus={true}
							value={weight}
							onChange={e => setWeight(e.target.value)}
						/>
					</Label>
				</ExerciseOnly>
				<ButtonsContainer>
					<AddButton
						onClick={() => {
							if (name !== '') {
								setIsModalOpen(false)
								if (header === 'Add Exercise') {
									editExercises(url, oldExercises, {
										name: name,
										sets: sets,
										reps: reps,
										weight: weight,
									})
								} else {
									postData(url, name)
								}
								setNeedToReFetch(needToReFetch + 1)
								setName('')
								setSets('1')
								setReps('1')
							} else {
								cogoToast.error("Name field can't be empty")
							}
						}}
					>
						Add
					</AddButton>
					<CancelButton
						onClick={() => {
							setIsModalOpen(false)
							setName('')
							setSets('1')
							setReps('1')
						}}
					>
						Cancel
					</CancelButton>
				</ButtonsContainer>
			</ContentContainer>
		</Container>
	)
}

const Container = styled.div`
	display: ${({ isModalOpen }) => (isModalOpen ? 'flex' : 'none')};
	background-color: rgba(0, 0, 0, 0.35);
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	justify-content: center;
	align-items: center;
`

const ContentContainer = styled.div`
	padding: 2rem 3rem;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
	background-color: #fff;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
`

const Header = styled.p`
	font-size: 1.3em;
	text-align: center;
	margin-bottom: 1rem;
`

const Input = styled.input`
	padding: 0.2rem;
	font-size: 1em;
	border-radius: 7px;
`

const WeightInput = styled.input`
	padding: 0.2rem;
	font-size: 1em;
	border-radius: 7px;
	width: 25%;
`

const Label = styled.label`
	margin: 0.3rem 0;
`

const Select = styled.select``

const Option = styled.option``

const ButtonsContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const AddButton = styled(SecondaryButton)`
	margin: 0.4rem 0;
`

const CancelButton = styled(SecondaryButton)`
	margin: 0.4rem 0;
	border: none;
`

const ExerciseOnly = styled.div`
	display: ${({ header }) => (header === 'Add Exercise' ? 'flex' : 'none')};
	flex-direction: column;
`

export default Modal
