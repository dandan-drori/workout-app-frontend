import cogoToast from 'cogo-toast'

export const fetchData = async (url, setData, setIsLoading) => {
	const response = await fetch(url)
	const json = await response.json()
	setData(json)
	setIsLoading(false)
}

export const handleSubmit = async (e, url, name, password, email, setData) => {
	e.preventDefault()

	const reqOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name: name,
			password: password,
			email: email,
		}),
	}

	const response = await fetch(url, reqOptions)
	const json = await response.json()
	setData(json)
}

export const handleSignIn = async (e, url, email, password, setData) => {
	e.preventDefault()
	const reqOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email: email, password: password }),
	}
	const response = await fetch(url, reqOptions)
	const json = await response.json()
	setData(json)
}

export const postData = (url, data) => {
	const reqOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name: data }),
	}
	fetch(url, reqOptions)
}

export const deleteData = (url, data) => {
	const reqOptions = {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name: data }),
	}
	fetch(url, reqOptions)
}

export const editData = (url, updatedProp, newData) => {
	const reqOptions = {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify([{ propName: updatedProp, value: newData }]),
	}
	fetch(url, reqOptions)
}

export const fetchExercises = async (url, setData, setIsLoading) => {
	const response = await fetch(url)
	const json = await response.json()
	setData(json.workout[0].exercises)
	setIsLoading(false)
}

export const editExercises = async (url, oldData, newData) => {
	const reqOptions = {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify([
			{
				propName: 'exercises',
				value: [...oldData, newData],
			},
		]),
	}
	const response = await fetch(url, reqOptions)
}
