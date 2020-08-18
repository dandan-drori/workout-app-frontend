import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../../styles/GlobalStyle'
import { FaTrash, FaPencilAlt } from 'react-icons/fa'
import DeleteModal from '../delete-modal/DeleteModal'
import EditModal from '../edit-modal/EditModal'

const WorkoutItem = ({ name, needToReFetch, setNeedToReFetch }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isEditModalOpen, setIsEditModalOpen] = useState(false)
	return (
		<Container>
			<StyledLink to={{ pathname: `/workouts/${name}`, state: { name: name } }}>
				{name}
			</StyledLink>
			<>
				<EditButton onClick={() => setIsEditModalOpen(true)}>
					<FaPencilAlt />
				</EditButton>
				<DeleteButton onClick={() => setIsModalOpen(true)}>
					<FaTrash />
				</DeleteButton>
			</>
			<DeleteModal
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				name={name}
				needToReFetch={needToReFetch}
				setNeedToReFetch={setNeedToReFetch}
			/>
			<EditModal
				isModalOpen={isEditModalOpen}
				setIsModalOpen={setIsEditModalOpen}
				name={name}
				needToReFetch={needToReFetch}
				setNeedToReFetch={setNeedToReFetch}
			/>
		</Container>
	)
}

const Container = styled.li`
	margin-bottom: 2rem;
	list-style: none;
	border: 1px solid black;
	padding: 0.5rem 0.5rem;
	padding-left: 0;
	border-radius: 1rem;
`

const StyledLink = styled(Link)`
	padding: 1rem 1rem;
	/* box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.25); */
	border-radius: 1rem 0 0 1rem;
	cursor: pointer;
	color: #050505;
	text-decoration: none;
`

const DeleteButton = styled(PrimaryButton)``

const EditButton = styled(PrimaryButton)`
	background-color: #ffa800;
	border-color: #ffa800;
	margin-right: 0.5rem;
`

export default WorkoutItem
