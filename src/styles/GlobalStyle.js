import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`

const Button = styled.button`
	padding: 0.3rem 0.5rem;
	border-radius: 7px;
	background: none;
	border: 2px solid #ff4433;
	font-weight: 500;
	font-size: 0.9em;
	cursor: pointer;
`

export const PrimaryButton = styled(Button)`
	background-color: #ff4433;
	color: #fff;
`

export const SecondaryButton = styled(Button)`
	color: #ff4433;
`

export default GlobalStyle
