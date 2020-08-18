import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spinner = () => {
	return (
		<Container>
			<First></First>
			<Second></Second>
			<Third></Third>
			<Forth></Forth>
		</Container>
	)
}

const Container = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
`
const ldsRing = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`
const Common = styled.div`
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 64px;
	height: 64px;
	margin: 8px;
	border: 8px solid black;
	border-radius: 50%;
	animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: #32c8ff transparent transparent transparent;
`
const First = styled(Common)`
	animation-delay: -0.45s;
`
const Second = styled(Common)`
	animation-delay: -0.3s;
`
const Third = styled(Common)`
	animation-delay: -0.15s;
`
const Forth = styled(Common)``

export default Spinner
