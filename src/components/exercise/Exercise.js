import React from 'react'
import styled from 'styled-components'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'
import { PrimaryButton } from '../../styles/GlobalStyle'
import EditModal from '../edit-modal/EditModal'
import DeleteModal from '../delete-modal/DeleteModal'

const Exercise = ({ name, sets, reps, weight }) => {
	return (
		<Item>
			<div>
				<Name>Name: {name}</Name>
				<DetailsWrapper>
					<Detail>Sets: {sets}</Detail>
					<Detail>Reps: {reps}</Detail>
					<Detail>Weight: {weight}kg</Detail>
				</DetailsWrapper>
			</div>
			<ButtonsWrapper>
				<EditButton>
					<FaPencilAlt />
				</EditButton>
				<DeleteButton>
					<FaTrash />
				</DeleteButton>
			</ButtonsWrapper>
			<EditModal />
			<DeleteModal />
		</Item>
	)
}

const Item = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25);
	list-style: none;
	border-radius: 1rem;
	margin-bottom: 1rem;
`

const Name = styled.p`
	font-size: 1.2em;
	margin-right: 0.1rem;
`

const DetailsWrapper = styled.div`
	display: flex;
`

const Detail = styled.p`
	font-size: 1.1em;
	color: #888;
	margin: 0 0.1rem;
`

const ButtonsWrapper = styled.div``

const EditButton = styled(PrimaryButton)`
	background-color: #ffa800;
	border-color: #ffa800;
	margin: 0 0.5rem;
`

const DeleteButton = styled(PrimaryButton)``

export default Exercise
