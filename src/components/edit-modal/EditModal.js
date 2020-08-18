import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from '../../styles/GlobalStyle'
import { editData } from '../../utils/Utils'

const DeleteModal = ({
	isModalOpen,
	setIsModalOpen,
	name,
	needToReFetch,
	setNeedToReFetch,
}) => {
	const [newName, setNewName] = useState('')
	const modalRef = useRef(null)
	return (
		<Container
			isModalOpen={isModalOpen}
			ref={modalRef}
			onClick={e => {
				if (e.target === modalRef.current) {
					setIsModalOpen(false)
				}
			}}
		>
			<ContentContainer>
				<Header>Edit Name</Header>
				<Input
					type='text'
					placeholder='New name'
					value={newName}
					onChange={e => setNewName(e.target.value)}
				/>
				<ButtonsContainer>
					<EditButton
						onClick={() => {
							setIsModalOpen(false)
							editData(
								`http://localhost:8000/workouts/${name}`,
								'name',
								newName
							)
							setNeedToReFetch(needToReFetch + 1)
							setNewName('')
						}}
					>
						Confirm
					</EditButton>
					<CancelButton
						onClick={() => {
							setIsModalOpen(false)
							setNewName('')
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
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.35);
`

const ContentContainer = styled.div`
	padding: 1rem 2rem;
	padding-top: 1.5rem;
	background-color: #fff;
	border-radius: 1rem;
`

const Header = styled.p`
	font-size: 1.5em;
	color: #ffa800;
	margin-bottom: 1.2rem;
`

const Input = styled.input`
	margin-bottom: 1rem;
	padding: 0.2rem 0.5rem;
	font-size: 1.1em;
	border-radius: 7px;
`

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`

const EditButton = styled(PrimaryButton)`
	background-color: #ffa800;
	border-color: #ffa800;
`

const CancelButton = styled(SecondaryButton)`
	border: none;
	color: #ffa800;
`

export default DeleteModal
