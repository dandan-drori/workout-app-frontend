import React, { useRef } from 'react'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from '../../styles/GlobalStyle'
import { deleteData } from '../../utils/Utils'

const DeleteModal = ({
	isModalOpen,
	setIsModalOpen,
	name,
	needToReFetch,
	setNeedToReFetch,
}) => {
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
				<Header>Warning</Header>
				<Text>Are you sure you want to delete this?</Text>
				<ButtonsContainer>
					<DeleteButton
						onClick={() => {
							setIsModalOpen(false)
							deleteData('http://localhost:8000/workouts', name)
							setNeedToReFetch(needToReFetch + 1)
						}}
					>
						Delete
					</DeleteButton>
					<CancelButton onClick={() => setIsModalOpen(false)}>
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
	color: #ff4433;
	margin-bottom: 1.2rem;
`

const Text = styled.p`
	font-size: 1.2em;
	margin-bottom: 1.5rem;
`

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`

const DeleteButton = styled(PrimaryButton)``

const CancelButton = styled(SecondaryButton)`
	border: none;
`

export default DeleteModal
